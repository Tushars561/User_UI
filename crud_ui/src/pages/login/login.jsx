// import { useState } from "react";
// import loginActionCreator from "./ActionCreator";
// import { useDispatch } from "react-redux";

// function Signin() {
//   const dispatch = useDispatch();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const login = () => {
//     dispatch(loginActionCreator(email, password));
//   };

//   return (
//     <div className="my-5 mx-auto text-center shadow p-5" style={{ maxWidth: "500px" }}>
//       <h3>Sign In</h3>
//       <div className="my-4">
//         <input
//           type="text"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="Enter Email"
//           className="form-control"
//         />
//       </div>

//       <div className="my-4">
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className="form-control"
//           placeholder="Enter Password"
//         />
//       </div>

//       <div>
//         <button className="btn btn-dark px-5" onClick={login}>
//           Sign In
//         </button>
//       </div>

//       <div className="mt-4">
//         <a href="/signup">Create an Account</a>
//       </div>
//     </div>
//   );
// }

// export default Signin;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ import this

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
 const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch(`https://localhost:7245/api/User/login?email=${email}&password=${password}`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
});


      if (!response.ok) {
        const errorMsg = await response.text();
        setError(errorMsg || "Login failed");
        setLoading(false);
        return;
      }

      const data = await response.json();
      // Save JWT token to localStorage (or wherever you want)
      localStorage.setItem("token", data.token || data.Token);
      alert("Login successful!");
       navigate("/");
      // Redirect or update UI accordingly
    } catch (err) {
      setError("An error occurred. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div style={{ maxWidth: 300, margin: "auto", padding: 20 }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ width: "100%", marginBottom: 10, padding: 8 }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ width: "100%", marginBottom: 10, padding: 8 }}
        />
        <button type="submit" disabled={loading} style={{ width: "100%", padding: 10 }}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
      {error && <p style={{ color: "red", marginTop: 10 }}>{error}</p>}
    </div>
  );
};

export default Login;
