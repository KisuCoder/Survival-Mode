
const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000/api";

async function sendAuthRequest(endpoint, formData) {
  const response = await fetch(`${API_URL}/auth/${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data.error || "Authentication failed.");
  }

  return data;
}

export function registerUser(formData) {
  return sendAuthRequest("register", {
    name: formData.name.trim(),
    email: formData.email.trim().toLowerCase(),
    password: formData.password,
  });
}

export function loginUser(formData) {
  return sendAuthRequest("login", {
    email: formData.email.trim().toLowerCase(),
    password: formData.password,
  });
}