// import React, { useState } from "react";

// function Signup() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: ""
//   });

//   const [message, setMessage] = useState("");

//   // Handle input change
//   const handleChange = (e) => {
//     setFormData({...formData, [e.target.name]: e.target.value });
//   };

//   // Handle form submit
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setMessage("");

//     try {
//       const response = await fetch("https://localhost:7245/api/User/SignUp", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         setMessage("Signup successful! You can now login.");
//         setFormData({ name: "", email: "", password: "" });
//       } else {
//         const errorData = await response.json();
//         setMessage("Error: " + (errorData.message || "Signup failed"));
//       }
//     } catch (error) {
//       setMessage("Network error: " + error.message);
//     }
//   };

//   return (
//     <div style={{ maxWidth: 400, margin: "auto" }}>
//       <h2>Sign Up</h2>

//       {message && <p>{message}</p>}

//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Name:</label><br />
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div>
//           <label>Email:</label><br />
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div>
//           <label>Password:</label><br />
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <button type="submit" style={{ marginTop: 10 }}>Sign Up</button>
//       </form>
//     </div>
//   );
// }

// export default Signup;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ import hook

function Signup() {
  const navigate = useNavigate(); // ✅ initialize navigate

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const response = await fetch("https://localhost:7245/api/User/SignUp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage("Signup successful! Redirecting to login...");
        setFormData({ name: "", email: "", password: "" });

        setTimeout(() => {
          navigate("/login"); // ✅ redirect to login page
        }, 1000); // Optional delay for showing success message
      } else {
        const errorData = await response.json();
        setMessage("Error: " + (errorData.message || "Signup failed"));
      }
    } catch (error) {
      setMessage("Network error: " + error.message);
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "auto" }}>
      <h2>Sign Up</h2>

      {message && <p>{message}</p>}

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label><br />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Email:</label><br />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Password:</label><br />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" style={{ marginTop: 10 }}>Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;
