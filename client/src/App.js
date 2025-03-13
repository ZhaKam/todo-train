import React, { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import TimetablePage from "./pages/TimetablePage/TimetablePage";
import ServicesPage from "./pages/ServicesPage/ServicesPage"
import ContactPage from "./pages/ContactPage/ContactPage";
import AuthPage from "./pages/AuthPage/AuthPage";
import { AuthContext } from "./context/AuthContext";


export default function App() {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={isAuthenticated ? <HomePage /> : <Navigate to="/login" />}
        />
        <Route
          path="/about"
          element={isAuthenticated ? <AboutPage /> : <Navigate to="/login" />}
        />
        <Route
          path="/timetable"
          element={isAuthenticated ? <TimetablePage /> : <Navigate to="/login" />}
        />
        <Route
          path="/contact"
          element={isAuthenticated ? <ContactPage /> : <Navigate to="/login" />}
        />
        <Route
          path="/services"
          element={isAuthenticated ? <ServicesPage /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={isAuthenticated ? <Navigate to="/" /> : <AuthPage />}
        />
        <Route
          path="/registration"
          element={isAuthenticated ? <Navigate to="/" /> : <AuthPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}