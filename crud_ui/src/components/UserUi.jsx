import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function UserUi() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [search, setSearch] = useState('');
  const [file, setFile] = useState(null);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const res = await axios.get('http://localhost:4000/users');
    setUsers(res.data.data);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (editingId) {
      await axios.put(`http://localhost:4000/users/update?id=${editingId}`, form);
    } else {
      await axios.post('http://localhost:4000/users', form);
    }
    setForm({ name: '', email: '', password: '' });
    setEditingId(null);
    fetchUsers();
  };

  const handleEdit = (user) => {
    setForm(user);
    setEditingId(user.id);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:4000/users/${id}`);
    fetchUsers();
  };

  const handleCSVUpload = async () => {
    const formData = new FormData();
    formData.append('file', file);
    await axios.post('http://localhost:4000/users/upload', formData);
    fetchUsers();
  };

  const filteredUsers = users.filter((u) =>
    u.name.toLowerCase().includes(search.toLowerCase()) ||
    u.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: 20 }}>
      <h2>User Management</h2>

      <input
        type="text"
        placeholder="Name"
        name="name"
        value={form.name}
        onChange={handleChange}
      />
      <input
        type="email"
        placeholder="Email"
        name="email"
        value={form.email}
        onChange={handleChange}
      />
      <input
        type="password"
        placeholder="Password"
        name="password"
        value={form.password}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>{editingId ? 'Update' : 'Add'} User</button>

      <hr />

      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleCSVUpload}>Upload CSV</button>

      <hr />

      <input
        type="text"
        placeholder="Search by name or email"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <table border="1" cellPadding="10" style={{ marginTop: 20 }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
              <td>
                <button onClick={() => handleEdit(user)}>Edit</button>
                <button onClick={() => handleDelete(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
