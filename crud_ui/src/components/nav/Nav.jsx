import React from "react";
import "./Nav.css";
function Nav() {
  return (
    <div className="navContainer">
      <div className="title">
        <h2>Ecommerce-App</h2>
      </div>
      <div className="links">
        <a href="/home">Home</a>
        <a href="/products">Products</a>
        <a href="/login">SignIn</a>
        <a href="/signup">SignUp</a>
        <a href="/todoApp">TodoApp</a>
        <a href="/noteApp">NoteApp</a>
      </div>
    </div>
  );
}

export default Nav;
