// src/components/nav/Nav.jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <a className="navbar-brand" href="/home">🛒 Ecomars</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a className="nav-link" href="/home">🏠 Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/products">🛍️ Products</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/login">🔐 SignIn</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/signup">📝 SignUp</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/todoApp">✅ TodoApp</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/noteApp">🗒️ NoteApp</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-danger" href="/logout">🚪 Logout</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
