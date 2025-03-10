import React from 'react';
import './PromoInfo.scss';

const PromoInfo = () => {
  const features = [
    {
      title: "Современное оборудование",
      text: "Залы с профессиональными тренажерами последнего поколения"
    },
    {
      title: "Профессиональные тренеры",
      text: "Призеры соревнований и сертифицированные специалисты"
    },
    {
      title: "Индивидуальный подход",
      text: "Персональные программы тренировок для каждого клиента"
    },
    {
      title: "Комфортные условия",
      text: "Просторные раздевалки и душевые с современным ремонтом"
    },
    {
      title: "Доступные цены",
      text: "Гибкая система скидок и специальные предложения"
    },
    {
     title: "Четкое планирование",
     text: "Мы предоставим вам план тренировок и питания"
      }
  ];

  return (
    <section className="promo-section">
      <div className="container">
        <h1 className="main-title">Современный тренажерный зал в центре города</h1>
        
        <div className="welcome-block">
          <p className="lead-text">Рады Вас видеть на сайте нашего фитнес-центра!</p>
        </div>

        <div className="mission-statement">
          <h2>Наши основные принципы:</h2>
          <div className="two-column-grid">
            <div className="text-block">
              <p>Наш клуб ставит своей первоочередной целью - предоставление качественных услуг в сфере фитнеса.</p>
              <p>Профессионализм - для нас не пустое слово. Все тренеры - обладатели спортивных разрядов и призеры соревнований.</p>
            </div>
            <div className="text-block">
              <p>Мы используем только индивидуальный подход и готовы составить персональный план занятий с учетом ваших особенностей.</p>
              <p>Залы оснащены современными тренажерами, поддерживается оптимальный микроклимат.</p>
            </div>
          </div>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </div>
          ))}
        </div>

        <div className="cta-block">
          <button className="cta-button">
            Записаться на бесплатную экскурсию
          </button>
        </div>
      </div>
    </section>
  );
};

export default PromoInfo;
