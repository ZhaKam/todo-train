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
    <nav className="navbar-container">
      <div className="container">
        <div className="navbar-content">
          <Link to="/" className="navbar-brand">
            ADRENALINE<span className="brand-accent">BOOST</span>
          </Link>

          <div className="nav-links">
            {isAuthenticated ? (
              <>
                <Link to="/" className="nav-link">
                  Главная
                </Link>
                <Link to="/about" className="nav-link">
                  О нас
                </Link>
                <Link to="/services" className="nav-link">
                  Услуги
                </Link>
                <Link to="/timetable" className="nav-link">
                  Расписание
                </Link>
                <Link to="/contact" className="nav-link">
                  Контакты
                </Link>
                <button 
                  className="nav-button logout" 
                  onClick={handleLogout}
                >
                  Выйти
                </button>
              </>
            ) : (
              <Link to="/login" className="nav-button login">
                Войти
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
