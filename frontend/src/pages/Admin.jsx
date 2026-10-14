import {  useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  Building2,
  ShieldCheck,
  Trash2,
  Plus,
  ChevronDown,
} from "lucide-react";

import Navbar from "../components/Navbar";
import {
  getStats,
  getUsers,
  setUserRole,
  deleteUser,
  getProperties,
  createProperty,
  setPropertyStatus,
  deletePropertyAsAdmin,
} from "../services/admin";

import "../css/Admin.css";

function getStoredUser() {
  try {
    return JSON.parse(localStorage.getItem("dihausUser") || "null");
  } catch {
    return null;
  }
}

const emptyForm = {
  title: "",
  address: "",
  description: "",
  imageUrl: "",
  price: "",
  area: "",
  bedrooms: "",
  bathrooms: "",
  stories: "1",
};

function formatPeso(value) {
  if (typeof value !== "number") return "—";
  return `₱${value.toLocaleString("en-PH")}`;
}

function formatDate(value) {
  return new Date(value).toLocaleDateString("en-PH", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

/* ---------- Overview ---------- */
function Overview({ stats }) {
  if (!stats) return <div className="admin-empty">Loading overview...</div>;

  const cards = [
    { label: "Total Users", value: stats.users },
    { label: "Admins", value: stats.admins },
    { label: "Properties", value: stats.properties },
    { label: "Available", value: stats.byStatus.available },
    { label: "Pending", value: stats.byStatus.pending },
    { label: "Sold", value: stats.byStatus.sold },
  ];

  return (
    <>
      <div className="admin-stats">
        {cards.map((card) => (
          <div className="admin-stat" key={card.label}>
            <span>{card.label}</span>
            <strong>{card.value}</strong>
          </div>
        ))}
      </div>

      <div className="admin-card">
        <h2>Newest users</h2>

        {stats.recentUsers.length === 0 ? (
          <div className="admin-empty">No users yet.</div>
        ) : (
          <table className="admin-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Joined</th>
              </tr>
            </thead>
            <tbody>
              {stats.recentUsers.map((user) => (
                <tr key={user._id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <span className={`admin-pill ${user.role}`}>
                      {user.role}
                    </span>
                  </td>
                  <td>{formatDate(user.createdAt)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}

/* ---------- Users ---------- */
function UsersTab({ users, currentUserId, onChangeRole, onDelete }) {
  return (
    <div className="admin-card">
      <h2>All users ({users.length})</h2>

      {users.length === 0 ? (
        <div className="admin-empty">No users found.</div>
      ) : (
        <div className="admin-table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Joined</th>
                <th aria-label="Actions" />
              </tr>
            </thead>
            <tbody>
              {users.map((user) => {
                const isSelf = user._id === currentUserId;

                return (
                  <tr key={user._id}>
                    <td>
                      {user.name}
                      {isSelf && <span className="admin-you">You</span>}
                    </td>
                    <td>{user.email}</td>
                    <td>
                      <span className={`admin-pill ${user.role}`}>
                        {user.role}
                      </span>
                    </td>
                    <td>{formatDate(user.createdAt)}</td>
                    <td className="admin-actions">
                      <button
                        type="button"
                        className="admin-btn-outline"
                        disabled={isSelf}
                        onClick={() =>
                          onChangeRole(
                            user,
                            user.role === "admin" ? "user" : "admin"
                          )
                        }
                      >
                        <ShieldCheck size={12} />
                        {user.role === "admin" ? "Remove admin" : "Make admin"}
                      </button>

                      <button
                        type="button"
                        className="admin-btn-danger"
                        disabled={isSelf}
                        onClick={() => onDelete(user)}
                        aria-label={`Delete ${user.name}`}
                      >
                        <Trash2 size={12} />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

/* ---------- Properties ---------- */
function PropertiesTab({ properties, onCreate, onStatus, onDelete }) {
  const [form, setForm] = useState(emptyForm);
  const [saving, setSaving] = useState(false);

  const handleChange = (event) =>
    setForm({ ...form, [event.target.name]: event.target.value });

  async function handleSubmit(event) {
    event.preventDefault();
    setSaving(true);

    const ok = await onCreate({
      title: form.title.trim(),
      address: form.address.trim(),
      description: form.description.trim(),
      imageUrls: form.imageUrl.trim() ? [form.imageUrl.trim()] : [],
      price: Number(form.price) || undefined,
      area: Number(form.area),
      bedrooms: Number(form.bedrooms),
      bathrooms: Number(form.bathrooms),
      stories: Number(form.stories),
    });

    if (ok) setForm(emptyForm);
    setSaving(false);
  }

  return (
    <>
      <form className="admin-card admin-form" onSubmit={handleSubmit}>
        <h2>Add a property</h2>

        <div className="admin-form-grid">
              <div className="admin-field wide">
    <label>Address</label>
    <input name="address" placeholder="e.g. Diliman, Quezon City" value={form.address} onChange={handleChange} />
  </div>

  <div className="admin-field wide">
    <label>Image URL</label>
    <input name="imageUrl" placeholder="https://..." value={form.imageUrl} onChange={handleChange} />
  </div>

  <div className="admin-field wide">
    <label>Description</label>
    <input name="description" placeholder="Short description" value={form.description} onChange={handleChange} />
  </div>
          <div className="admin-field wide">
            <label>Title</label>
            <input
              name="title"
              placeholder="e.g. Modern 3BR Condominium"
              value={form.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className="admin-field">
            <label>Price (₱)</label>
            <input
              type="number"
              name="price"
              placeholder="e.g. 5800000"
              value={form.price}
              onChange={handleChange}
              min="0"
            />
          </div>

          <div className="admin-field">
            <label>Floor area (m²)</label>
            <input
              type="number"
              name="area"
              placeholder="e.g. 60"
              value={form.area}
              onChange={handleChange}
              min="1"
              required
            />
          </div>

          <div className="admin-field">
            <label>Bedrooms</label>
            <input
              type="number"
              name="bedrooms"
              placeholder="e.g. 2"
              value={form.bedrooms}
              onChange={handleChange}
              min="0"
              required
            />
          </div>

          <div className="admin-field">
            <label>Bathrooms</label>
            <input
              type="number"
              name="bathrooms"
              placeholder="e.g. 1"
              value={form.bathrooms}
              onChange={handleChange}
              min="0"
              required
            />
          </div>

          <div className="admin-field">
            <label>Stories</label>
            <input
              type="number"
              name="stories"
              value={form.stories}
              onChange={handleChange}
              min="1"
              required
            />
          </div>
        </div>

        <button type="submit" className="admin-btn-primary" disabled={saving}>
          <Plus size={13} />
          {saving ? "Saving..." : "Add property"}
        </button>
      </form>

      <div className="admin-card">
        <h2>All properties ({properties.length})</h2>

        {properties.length === 0 ? (
          <div className="admin-empty">
            No properties in the database yet. Add one above.
          </div>
        ) : (
          <div className="admin-table-wrap">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Beds / Baths</th>
                  <th>Area</th>
                  <th>Status</th>
                  <th aria-label="Actions" />
                </tr>
              </thead>
              <tbody>
                {properties.map((property) => (
                  <tr key={property._id}>
                    <td>{property.title}</td>
                    <td>{formatPeso(property.price)}</td>
                    <td>
                      {property.bedrooms} / {property.bathrooms}
                    </td>
                    <td>{property.area} m²</td>
                    <td>
                      <div className="admin-select">
                        <select
                          value={property.status}
                          onChange={(event) =>
                            onStatus(property, event.target.value)
                          }
                        >
                          <option value="available">Available</option>
                          <option value="pending">Pending</option>
                          <option value="sold">Sold</option>
                        </select>
                        <ChevronDown size={12} />
                      </div>
                    </td>
                    <td className="admin-actions">
                      <button
                        type="button"
                        className="admin-btn-danger"
                        onClick={() => onDelete(property)}
                        aria-label={`Delete ${property.title}`}
                      >
                        <Trash2 size={12} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
}

/* ---------- Page ---------- */
function Admin() {
  const currentUser = getStoredUser();
  const isAdmin = currentUser?.role === "admin";

  const [tab, setTab] = useState("overview");
  const [stats, setStats] = useState(null);
  const [users, setUsers] = useState([]);
  const [properties, setProperties] = useState([]);
  const [error, setError] = useState("");

    const [reloadKey, setReloadKey] = useState(0);

  useEffect(() => {
    if (!isAdmin) return;

    let ignore = false;

    Promise.all([getStats(), getUsers(), getProperties()])
      .then(([statsData, usersData, propertiesData]) => {
        if (ignore) return;
        setStats(statsData);
        setUsers(usersData);
        setProperties(propertiesData);
        setError("");
      })
      .catch((err) => {
        if (!ignore) setError(err.message);
      });

    return () => {
      ignore = true;
    };
  }, [isAdmin, reloadKey]);

  async function run(action) {
    try {
      await action();
      setReloadKey((key) => key + 1);
      return true;
    } catch (err) {
      setError(err.message);
      return false;
    }
  }

  const handleChangeRole = (user, role) =>
    run(() => setUserRole(user._id, role));

  const handleDeleteUser = (user) => {
    if (!window.confirm(`Delete ${user.name}'s account? This can't be undone.`))
      return;
    run(() => deleteUser(user._id));
  };

  const handleCreateProperty = (data) => run(() => createProperty(data));

  const handleStatus = (property, status) =>
    run(() => setPropertyStatus(property._id, status));

  const handleDeleteProperty = (property) => {
    if (!window.confirm(`Delete "${property.title}"? This can't be undone.`))
      return;
    run(() => deletePropertyAsAdmin(property._id));
  };

  if (!isAdmin) {
    return (
      <>
        <Navbar />
        <main className="admin-page">
          <div className="admin-container">
            <div className="admin-card admin-denied">
              <h2>Admins only</h2>
              <p>
                You need to be logged in with an admin account to view this
                page.
              </p>
              <Link to="/" className="admin-btn-primary">
                Back to Home
              </Link>
            </div>
          </div>
        </main>
      </>
    );
  }

  const tabs = [
    { id: "overview", label: "Overview", icon: LayoutDashboard },
    { id: "users", label: "Users", icon: Users },
    { id: "properties", label: "Properties", icon: Building2 },
  ];

  return (
    <>
      <Navbar />

      <main className="admin-page">
        <div className="admin-container">
          <div className="admin-header">
            <h1>Admin Dashboard</h1>
            <p>Manage users and property listings.</p>
          </div>

          <div className="admin-tabs" role="tablist">
            {tabs.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                type="button"
                role="tab"
                aria-selected={tab === id}
                className={tab === id ? "selected" : ""}
                onClick={() => setTab(id)}
              >
                <Icon size={13} />
                {label}
              </button>
            ))}
          </div>

          {error && (
            <div className="admin-error" role="alert">
              {error}
            </div>
          )}

          {tab === "overview" && <Overview stats={stats} />}

          {tab === "users" && (
            <UsersTab
              users={users}
              currentUserId={currentUser.id}
              onChangeRole={handleChangeRole}
              onDelete={handleDeleteUser}
            />
          )}

          {tab === "properties" && (
            <PropertiesTab
              properties={properties}
              onCreate={handleCreateProperty}
              onStatus={handleStatus}
              onDelete={handleDeleteProperty}
            />
          )}
        </div>
      </main>
    </>
  );
}

export default Admin;
