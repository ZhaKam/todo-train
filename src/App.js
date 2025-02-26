import React, { useContext } from "react"; // Добавь эту строку
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AuthPage from "./pages/AuthPage/AuthPage";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import { AuthContext } from "./context/AuthContext";
import "./App.scss";

function App() {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/login"
          element={isAuthenticated ? <Navigate to="/" /> : <AuthPage />}
        />
        <Route
          path="/registration"
          element={isAuthenticated ? <Navigate to="/" /> : <AuthPage />}
        />
        <Route
          path="/"
          element={
            isAuthenticated ? <HomePage /> : <Navigate to="/login" />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;