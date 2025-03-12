import React from "react";
import "./Header.scss";

export default function Header() {
  return (
    <header className="header-section">
      <div className="container">
        <div className="header-content">
          <h1 className="gym-title">Тренажерный зал ADRENALINE<span className="brand-accent">BOOST</span></h1>
          
          <div className="contacts-grid">
            <div className="contact-item">
              <div className="icon-circle time-icon"></div>
              <div>
                <p className="contact-label">Часы работы</p>
                <p className="contact-value">Пн-Пт 7:00 - 22:00</p>
                <p className="contact-value">Сб-Вс 9:00 - 20:00</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="icon-circle phone-icon"></div>
              <div>
                <p className="contact-label">Телефон</p>
                <p className="contact-value">+7 (123) 456-78-90</p>
                <p className="contact-value">+7 (098) 765-43-21</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
