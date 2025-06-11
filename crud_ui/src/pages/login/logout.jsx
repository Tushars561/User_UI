import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Remove token from localStorage
    localStorage.removeItem("token");

    // Optionally clear other user data
    // localStorage.clear();

    // Redirect to login
    navigate("/login");
  }, [navigate]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Logging you out...</h2>
    </div>
  );
};

export default Logout;
