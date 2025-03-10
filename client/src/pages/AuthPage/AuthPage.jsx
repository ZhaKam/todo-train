import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./AuthPage.scss";

export default function AuthPage() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleAuth = async (event) => {
    event.preventDefault();
    setErrorMessage("");
    
    const endpoint = isLogin ? "login" : "registration";
    try {
      const response = await axios.post(
        `http://localhost:5000/api/auth/${endpoint}`,
        { ...form },
        { headers: { "Content-Type": "application/json" } }
      );

      if (isLogin) {
        login(response.data.token);
        navigate("/");
      } else {
        navigate("/login");
      }
    } catch (error) {
      const message = error.response?.data?.message || 
        `Ошибка ${isLogin ? "входа" : "регистрации"}. Попробуйте снова.`;
      setErrorMessage(message);
      console.error(`Ошибка ${endpoint}:`, error);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h3 className="auth-title">{isLogin ? "Вход" : "Регистрация"}</h3>
          {errorMessage && <div className="auth-error">{errorMessage}</div>}
        </div>

        <form className="auth-form" onSubmit={handleAuth}>
          <div className="form-group">
            <input
              type="email"
              id="email"
              name="email"
              className="form-input"
              placeholder="Email"
              onChange={changeHandler}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              id="password"
              name="password"
              className="form-input"
              placeholder="Пароль"
              onChange={changeHandler}
              required
            />
          </div>

          <div className="auth-actions">
            <button type="submit" className="auth-button primary">
              {isLogin ? "Войти" : "Зарегистрироваться"}
            </button>
            <button
              type="button"
              className="auth-button secondary"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? "Создать аккаунт" : "Войти в существующий"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
