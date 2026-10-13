
require("dotenv").config({ path: __dirname + "/.env" });
const mongoose = require("mongoose");
const User = require("./models/User");

const members = [
  { name: "Robi", email: "robi@dihaus.local" },
  { name: "Wil", email: "wil@dihaus.local" },
  { name: "Francis", email: "francis@dihaus.local" },
  { name: "Clifford", email: "clifford@dihaus.local" },
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
        console.log(`Already exists: ${member.name}`);
        continue;
      }

      await User.create({
        ...member,
        password: process.env.DEMO_MEMBER_PASSWORD,
      });

      console.log(`Created account: ${member.name}`);
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