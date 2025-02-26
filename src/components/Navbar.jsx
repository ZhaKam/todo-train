import React, { useContext } from "react";
import { useNavigate } from "react-router-dom"; 
import { AuthContext } from "../context/AuthContext";
import "./Navbar.scss";

export default function Navbar() {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav>
      <div className="nav-wrapper navbar blue">
        <a href="/" className="brand-logo">
          MERN Todo App
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          {isAuthenticated ? (
            <li>
              <button onClick={handleLogout}>Выйти</button>
            </li>
          ) : (
            <li>
              <a href="/login">Войти</a>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}