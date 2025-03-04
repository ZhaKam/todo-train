import React from "react";
import "./Header.scss";

export default function Header() {
  return (
    <div className="header-section">
      <h1 className="gym-name">Тренажерный зал "Adrenaline Boost"</h1>
      <div className="info">
        <p className="schedule">🕒 Расписание: Пн-Пт 7:00 - 22:00, Сб-Вс 9:00 - 20:00</p>
        <p className="phone">📞 Телефон: +7 (123) 456-78-90</p>
      </div>
    </div>
  );
}