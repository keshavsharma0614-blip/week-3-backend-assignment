import { useEffect, useState } from "react";
import axios from "axios";

const API_URL =
  "https://scaling-umbrella-g4wj69j5g66q2pww7-3000.app.github.dev/api/users";

function Users() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({
    name: "",
    email: ""
  });
  const [editingId, setEditingId] = useState(null);
  const [message, setMessage] = useState("Loading users...");

  const fetchUsers = async () => {
    try {
      const res = await axios.get(API_URL);
      setUsers(res.data);
      setMessage("Backend connected successfully");
    } catch (error) {
      console.error(error);
      setMessage("Backend se connection nahi ho raha");
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editingId) {
        await axios.put(`${API_URL}/${editingId}`, form);
        setMessage("User updated successfully");
      } else {
        await axios.post(`${API_URL}/register`, {
          ...form,
          password: "123456"
        });
        setMessage("User added successfully");
      }

      setForm({
        name: "",
        email: ""
      });

      setEditingId(null);
      fetchUsers();
    } catch (error) {
      console.error(error);
      setMessage(
        error.response?.data?.message || "Operation failed"
      );
    }
  };

  const handleEdit = (user) => {
    setForm({
      name: user.name,
      email: user.email
    });

    setEditingId(user._id);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setMessage("User deleted successfully");
      fetchUsers();
    } catch (error) {
      console.error(error);
      setMessage(
        error.response?.data?.message || "Delete failed"
      );
    }
  };

  const handleCancel = () => {
    setEditingId(null);
    setForm({
      name: "",
      email: ""
    });
  };

  return (
    <div>
      <h1>Week 3 User Management</h1>

      <p>{message}</p>

      <h2>{editingId ? "Update User" : "Add User"}</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <br /><br />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <br /><br />

        <button type="submit">
          {editingId ? "Update User" : "Add User"}
        </button>

        {editingId && (
          <button type="button" onClick={handleCancel}>
            Cancel
          </button>
        )}
      </form>

      <h2>Users</h2>

      {users.length === 0 ? (
        <p>No users found</p>
      ) : (
        users.map((user) => (
          <div key={user._id}>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>

            <button onClick={() => handleEdit(user)}>
              Edit
            </button>

            <button onClick={() => handleDelete(user._id)}>
              Delete
            </button>

            <hr />
          </div>
        ))
      )}
    </div>
  );
}

export default Users;
