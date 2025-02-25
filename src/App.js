import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthPage from "./pages/AuthPage/AuthPage";
import Navbar from "./components/Navbar";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/login" element={<AuthPage />} />
        <Route path="/registration" element={<AuthPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;