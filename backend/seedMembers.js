require("dotenv").config({ path: __dirname + "/.env" });
const mongoose = require("mongoose");
const User = require("./models/User");

const members = [
  { name: "Robi", email: "robi@dihaus.local", role: "user" },
  { name: "Wil", email: "wil@dihaus.local", role: "user" },
  { name: "Francis", email: "francis@dihaus.local", role: "admin" },
  { name: "Clifford", email: "clifford@dihaus.local", role: "user" },
];

async function seedMembers() {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI is missing from backend/.env");
    }

    if (!process.env.DEMO_MEMBER_PASSWORD) {
      throw new Error("DEMO_MEMBER_PASSWORD is missing from backend/.env");
    }

    await mongoose.connect(process.env.MONGO_URI);

    for (const member of members) {
      const existing = await User.findOne({ email: member.email });

      if (existing) {
        // Account already exists: make sure its role matches the list above
        if (existing.role !== member.role) {
          existing.role = member.role;
          await existing.save();
          console.log(`Updated role: ${member.name} -> ${member.role}`);
        } else {
          console.log(`Already exists: ${member.name} (${member.role})`);
        }
        continue;
      }

      await User.create({
        ...member,
        password: process.env.DEMO_MEMBER_PASSWORD,
      });

      console.log(`Created account: ${member.name} (${member.role})`);
    }

    console.log("Member account setup complete.");
  } catch (error) {
    console.error("Seeding failed:", error.message);
    process.exitCode = 1;
  } finally {
    await mongoose.disconnect();
  }
}

seedMembers();