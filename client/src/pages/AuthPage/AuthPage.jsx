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

  const loginHandler = async (event) => {
    event.preventDefault();
    setErrorMessage("");
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        { ...form },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      login(response.data.token); 
      navigate("/"); 
    } catch (error) {
      if (error.response) {
        setErrorMessage(error.response.data.message || "Ошибка сервера");
      } else {
        setErrorMessage("Что-то пошло не так. Попробуйте снова.");
      }
      console.error("Ошибка входа:", error);
    }
  };

  const registerHandler = async (event) => {
    event.preventDefault();
    setErrorMessage("");
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/registration",
        { ...form },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
      navigate("/login"); 
    } catch (error) {
      if (error.response) {
        setErrorMessage(error.response.data.message || "Ошибка сервера");
      } else {
        setErrorMessage("Что-то пошло не так. Попробуйте снова.");
      }
      console.error("Ошибка регистрации:", error);
    }
  };

  return (
    <div className="container">
      <div className="auth-page">
        <h3>{isLogin ? "Вход" : "Регистрация"}</h3>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <form
          className="form form-register"
          onSubmit={isLogin ? loginHandler : registerHandler}
        >
          <div className="row">
            <div className="input-field col s12">
              <input
                type="email"
                id="email"
                name="email"
                className="validate"
                onChange={changeHandler}
                required
              />
              <label htmlFor="email">Email</label>
            </div>
            <div className="input-field col s12">
              <input
                type="password"
                id="password"
                name="password"
                className="validate"
                onChange={changeHandler}
                required
              />
              <label htmlFor="password">Password</label>
            </div>
            <div className="row">
              <button
                type="submit"
                className="waves-effect waves-light btn btn-blue"
              >
                {isLogin ? "Войти" : "Зарегистрироваться"}
              </button>
              <button
                type="button"
                className="btn-outline btn-reg"
                onClick={() => setIsLogin(!isLogin)}
              >
                {isLogin ? "Нет аккаунта?" : "Уже есть аккаунт?"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}