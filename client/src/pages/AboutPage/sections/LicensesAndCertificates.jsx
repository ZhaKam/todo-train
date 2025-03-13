import React from 'react';
import './LicensesAndCertificates.scss';

const LicensesAndCertificates = () => {
  return (
    <section className="history-section">
      <div className="centered-container">
        <h2 className="section-title">Лицензии и Сертификаты</h2>
        <p className="centered-text">
          Мы гордимся нашими лицензиями и сертификатами, которые подтверждают качество
          предоставляемых нами услуг и безопасность наших тренировок.
        </p>
        
        <div className="image-wrapper">
          <img 
            src="path_to_your_main_image.jpg" 
            alt="Лицензии и сертификаты" 
            className="history-photo" 
          />
          <p className="photo-caption">Наши лицензии и сертификаты</p>
        </div>
        
        <div className="content-block">
          <h3 className="subtitle">Наши Достижения</h3>
          <ul className="centered-list">
            <li>Лицензия на спортивную деятельность</li>
            <li>Сертификат безопасности тренировок</li>
            <li>Сертификаты квалификации тренеров</li>
            <li>Сертификаты на предоставление услуг фитнеса</li>
          </ul>
        </div>

        <div className="tech-grid">
          <div className="tech-item">
            <h4 className="tech-title">Лицензия на спортивную деятельность</h4>
            <img src="/assets/license1.png" alt="Лицензия 12345" className="tech-image" />
            <p>Выдана: 01.01.2025</p>
          </div>
          <div className="tech-item">
            <h4 className="tech-title">Сертификат безопасности тренировок</h4>
            <img src="/assets/license2.png" alt="Сертификат безопасности тренировок" className="tech-image" />
            <p>Выдан: 15.03.2025</p>
          </div>
          <div className="tech-item">
            <h4 className="tech-title">Сертификат тренера</h4>
            <img src="/assets/license3.png" alt="Сертификат тренера" className="tech-image" />
            <p>Выдан: 20.05.2025</p>
          </div>
          <div className="tech-item">
            <h4 className="tech-title">Сертификаты квалификации тренеров</h4>
            <img src="/assets/license4.png" alt="Сертификаты квалификации тренеров" className="tech-image" />
            <p>Выдан: 20.05.2025</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LicensesAndCertificates;