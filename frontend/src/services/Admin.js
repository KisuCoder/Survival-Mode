const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000/api";

async function request(path, options = {}) {
  const token = localStorage.getItem("dihausToken");

  const response = await fetch(`${API_URL}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      ...options.headers,
    },
  });

  if (response.status === 204) return null;

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data.error || "Request failed.");
  }

  return data;
}

export const getStats = () => request("/admin/stats");
export const getUsers = () => request("/admin/users");

export const setUserRole = (id, role) =>
  request(`/admin/users/${id}/role`, {
    method: "PATCH",
    body: JSON.stringify({ role }),
  });

export const deleteUser = (id) =>
  request(`/admin/users/${id}`, { method: "DELETE" });

export const getProperties = () => request("/properties");

export const createProperty = (data) =>
  request("/properties", { method: "POST", body: JSON.stringify(data) });

export const setPropertyStatus = (id, status) =>
  request(`/admin/properties/${id}/status`, {
    method: "PATCH",
    body: JSON.stringify({ status }),
  });

export const deletePropertyAsAdmin = (id) =>
  request(`/properties/admin/${id}`, { method: "DELETE" });