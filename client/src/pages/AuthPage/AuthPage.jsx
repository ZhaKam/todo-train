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
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleAuth = async (event) => {
    event.preventDefault();
    setErrorMessage("");
    setIsLoading(true);

    const endpoint = isLogin ? "login" : "registration";
    try {
      const response = await axios.post(
        `http://localhost:5000/api/auth/${endpoint}`,
        form,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Server Response:", response.data); // Логирование для отладки

      // Обработка успешного входа
      if (isLogin) {
        if (!response.data.token) {
          throw new Error("Токен не получен");
        }
        login(response.data.token);
        navigate("/");
      } else {
        // Обработка успешной регистрации
        setErrorMessage("Регистрация успешна! Войдите в систему.");
        setIsLogin(true); // Переключаем на форму входа
        setForm({ email: "", password: "" }); // Сброс формы
      }
    } catch (error) {
      let message = "Ошибка соединения";

      if (error.response) {
        // Обработка HTTP ошибок
        message =
          error.response.data?.message ||
          `Ошибка ${isLogin ? "авторизации" : "регистрации"}`;
      } else if (error.request) {
        // Нет ответа от сервера
        message = "Сервер не отвечает";
      } else {
        // Другие ошибки
        message = error.message;
      }

      setErrorMessage(message);
      console.error("Auth error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h3 className="auth-title">{isLogin ? "Вход" : "Регистрация"}</h3>
          {errorMessage && (
            <div className={`auth-error ${!isLogin && "success"}`}>
              {errorMessage}
              {errorMessage.includes("Ошибка") && (
                <div className="auth-error-hint">Проверьте введенные данные</div>
              )}
            </div>
          )}
        </div>

        <form className="auth-form" onSubmit={handleAuth}>
          <div className="form-group">
            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="Email"
              value={form.email}
              onChange={changeHandler}
              required
              autoComplete="email"
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              name="password"
              className="form-input"
              placeholder="Пароль"
              value={form.password}
              onChange={changeHandler}
              required
              minLength="6"
              autoComplete={isLogin ? "current-password" : "new-password"}
            />
          </div>

          <div className="auth-actions">
            <button
              type="submit"
              className="auth-button primary"
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="auth-spinner">Загрузка...</span>
              ) : isLogin ? (
                "Войти"
              ) : (
                "Зарегистрироваться"
              )}
            </button>

            <button
              type="button"
              className="auth-button secondary"
              onClick={() => !isLoading && setIsLogin(!isLogin)}
              disabled={isLoading}
            >
              {isLogin ? "Создать аккаунт" : "Уже есть аккаунт?"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}