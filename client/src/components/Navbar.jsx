import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
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
        <Link to="/" className="brand-logo">
          Тренажерный зал
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          {isAuthenticated ? (
            <>
              <li><Link to="/">Главная</Link></li>
              <li><Link to="/about">О нас</Link></li>
              <li><Link to="/services">Услуги</Link></li>
              <li><Link to="/pricing">Цены</Link></li>
              <li><Link to="/contact">Контакты</Link></li>
              <li>
                <button className="logout-button" onClick={handleLogout}>
                  Выйти
                </button>
              </li>
            </>
          ) : (
            <li>
              <Link to="/login" className="login-link">
                Войти
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}