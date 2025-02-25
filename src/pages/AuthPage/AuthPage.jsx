import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./AuthPage.scss";

export default function AuthPage() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState(""); 

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
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
    } catch (error) {
      if (error.response) {
    
        if (error.response.status === 409) {
          setErrorMessage(error.response.data.message); 
        } else {
          setErrorMessage(error.response.data.message || "Ошибка сервера");
        }
      } else {
     
        setErrorMessage("Что-то пошло не так. Попробуйте снова.");
      }
      console.error("Ошибка регистрации:", error);
    }
  };

  return (
    <div className="container">
      <div className="auth-page">
        <h3>Регистрация</h3>
      
        {errorMessage && (
          <div className="error-message">
            {errorMessage}
          </div>
        )}
        <form className="form form-register" onSubmit={registerHandler}>
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
                Зарегистрироваться
              </button>
              <Link to="/login" className="btn-outline btn-reg">
                Уже есть аккаунт?
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}