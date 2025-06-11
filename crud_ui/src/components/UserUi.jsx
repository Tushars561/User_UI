// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// export default function UserUi() {
//   const [users, setUsers] = useState([]);
//   const [form, setForm] = useState({ name: '', email: '', password: '' });
//   const [search, setSearch] = useState('');
//   const [file, setFile] = useState(null);
//   const [editingId, setEditingId] = useState(null);

//   useEffect(() => {
//     fetchUsers();
//   }, []);
// const fetchUsers = async () => {
//   try {
//     const response = await axios.get("https://localhost:7245/api/User");
//     console.log(response.data);
//   } catch (error) {
//     console.error("Error fetching users:", error);
//   }
// };
//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async () => {
//     if (editingId) {
//       await axios.put(`http://localhost:7245/api/User/${editingId}`, form);
//     } else {
//       await axios.post('http://localhost:7245/api/User', form);;
//     }
//     setForm({ name: '', email: '', password: '' });
//     setEditingId(null);
//     fetchUsers();
//   };

//   const handleEdit = (user) => {
//     setForm(user);
//     setEditingId(user.id);
//   };

//   const handleDelete = async (id) => {
//     await axios.delete(`http://localhost:7245/users/${id}`);
//     fetchUsers();
//   };

//   const handleCSVUpload = async () => {
//     const formData = new FormData();
//     formData.append('file', file);
//     await axios.post('http://localhost:7245/users/upload', formData);
//     fetchUsers();
//   };

//   const filteredUsers = users.filter((u) =>
//     u.name.toLowerCase().includes(search.toLowerCase()) ||
//     u.email.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div style={{ padding: 20 }}>
//       <h2>User Management</h2>

//       <input
//         type="text"
//         placeholder="Name"
//         name="name"
//         value={form.name}
//         onChange={handleChange}
//       />
//       <input
//         type="email"
//         placeholder="Email"
//         name="email"
//         value={form.email}
//         onChange={handleChange}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         name="password"
//         value={form.password}
//         onChange={handleChange}
//       />
//       <button onClick={handleSubmit}>{editingId ? 'Update' : 'Add'} User</button>

//       <hr />

//       <input type="file" onChange={(e) => setFile(e.target.files[0])} />
//       <button onClick={handleCSVUpload}>Upload CSV</button>

//       <hr />

//       <input
//         type="text"
//         placeholder="Search by name or email"
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//       />

//       <table border="1" cellPadding="10" style={{ marginTop: 20 }}>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Password</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredUsers.map((user) => (
//             <tr key={user.id}>
//               <td>{user.name}</td>
//               <td>{user.email}</td>
//               <td>{user.password}</td>
//               <td>
//                 <button onClick={() => handleEdit(user)}>Edit</button>
//                 <button onClick={() => handleDelete(user.id)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }


// ✅ FRONTEND FIXED (React)
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
    try {
      const response = await axios.get("http://localhost:7245/api/User");
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      if (editingId) {
        await axios.put(`http://localhost:7245/api/User/${editingId}`, form);
      } else {
        await axios.post('http://localhost:7245/api/User', form);
      }
      setForm({ name: '', email: '', password: '' });
      setEditingId(null);
      fetchUsers();
    } catch (error) {
      console.error("Error saving user:", error);
    }
  };

  const handleEdit = (user) => {
    setForm(user);
    setEditingId(user.id);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:7245/api/User/${id}`);
      fetchUsers();
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const handleCSVUpload = async () => {
    if (!file) return;
    try {
      const formData = new FormData();
      formData.append('file', file);
      await axios.post('http://localhost:7245/api/User/upload', formData);
      fetchUsers();
    } catch (error) {
      console.error("CSV Upload Failed:", error);
    }
  };

  const filteredUsers = users.filter((u) =>
    u.name.toLowerCase().includes(search.toLowerCase()) ||
    u.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: 20 }}>
      <h2>User Management</h2>

      <input type="text" placeholder="Name" name="name" value={form.name} onChange={handleChange} />
      <input type="email" placeholder="Email" name="email" value={form.email} onChange={handleChange} />
      <input type="password" placeholder="Password" name="password" value={form.password} onChange={handleChange} />
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
