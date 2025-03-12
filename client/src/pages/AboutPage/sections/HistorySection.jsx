import React from 'react';
import './HistorySection.scss';

const HistorySection = () => {
  return (
    <section className="history-section">
      <div className="centered-container">
        <h2 className="section-title">Наш флагманский клуб</h2>
        
        <div className="main-content">
          <div className="intro-block">
            <p className="centered-text">
              <strong>Фитнес-клуб «Westfield» сети ADRENALINEBOOST открылся в мае 2021 года.</strong> 
              Стильный и просторный клуб находится рядом с крупным торгово-развлекательным центром 
              <span className="highlight"> Westfield London</span> на улице 
              <span className="highlight"> Oxford Street</span> в районе 
              <span className="highlight"> Вестминстер</span>.
            </p>
          </div>

          <div className="image-wrapper">
            <img 
              src="/assets/westfield-gym.jpg" 
              alt="Интерьер клуба Westfield" 
              className="history-photo"
            />
            <div className="photo-caption">
              Вид на основную тренировочную зону клуба
            </div>
          </div>

          <div className="content-block">
            <h3 className="subtitle">О бренде</h3>
            <p className="centered-text">
              <span className="brand">ADRENALINEBOOST</span> является одним из самых узнаваемых брендов 
              на территории <span className="highlight">Великобритании</span>. Клубы сети сочетают 
              профессиональный подход с доступными ценами для людей любого возраста и уровня подготовки.
            </p>
          </div>

          <div className="content-block">
            <h3 className="subtitle">Инфраструктура</h3>
            <div className="tech-grid">
              <div className="tech-item">
                <h4 className="tech-title">Зонирование</h4>
                <ul className="centered-list">
                  <li>Кардио-зона с панорамным остеклением</li>
                  <li>Силовые и функциональные зоны</li>
                  <li>Групповые залы и сайкл-студия</li>
                  <li>Коворкинг-зона</li>
                </ul>
              </div>
              <div className="tech-item">
                <h4 className="tech-title">Доступ</h4>
                <p className="centered-text">
                  Вход по <span className="tech">QR-коду</span>, онлайн-регистрация через приложение, 
                  мгновенный доступ после оформления контракта
                </p>
              </div>
            </div>
          </div>

          <div className="content-block">
            <h3 className="subtitle">Кардиозона</h3>
            <p className="centered-text">
              Оснащена тренажёрами <span className="brand">Life Fitness</span> с консолями 
              <span className="tech">Integrity SX</span>. Система 
              <span className="tech">Flex Deck</span> снижает нагрузку на суставы на 30%.
            </p>
          </div>

          <div className="content-block">
            <h3 className="subtitle">Силовая зона</h3>
            <div className="tech-grid">
              <div className="tech-item">
                <h4 className="tech-title">Hammer Strength Select</h4>
                <p className="centered-text">
                  Изолированная проработка мышц с QR-кодами для доступа к видеоинструкциям
                </p>
              </div>
              <div className="tech-item">
                <h4 className="tech-title">HD Athletic Half Rack</h4>
                <p className="centered-text">
                  Многофункциональная стойка для работы со штангой
                </p>
              </div>
            </div>
          </div>

          <div className="content-block">
            <h3 className="subtitle">Функциональная зона</h3>
            <div className="tech-grid">
              <div className="tech-item">
                <h4 className="tech-title">Synrgy360T VERSA DAP</h4>
                <p className="centered-text">
                  Комплекс с аксессуарами <span className="brand">Escape</span> и 
                  <span className="tech">TRX</span>-петлями
                </p>
              </div>
              <div className="tech-item">
                <h4 className="tech-title">Synrgy360</h4>
                <p className="centered-text">
                  Платформы <span className="tech">Cable Motion</span> и 
                  перекладины <span className="tech">Rock Grip</span>
                </p>
              </div>
            </div>
          </div>

          <div className="content-block">
            <h3 className="subtitle">Сайкл-студия</h3>
            <div className="tech-grid">
              <div className="tech-item">
                <h4 className="tech-title">IC6</h4>
                <p className="centered-text">
                  Тренажёры с интеллектуальной системой отслеживания
                </p>
              </div>
              <div className="tech-item">
                <h4 className="tech-title">ICG Connect</h4>
                <p className="centered-text">
                  Цифровая платформа для соревнований и анализа прогресса
                </p>
              </div>
            </div>
          </div>

          <div className="content-block">
            <h3 className="subtitle">Развитие и технологии</h3>
            <p className="centered-text">
              <span className="brand">ADRENALINEBOOST</span> постоянно обновляет оборудование и внедряет 
              <span className="tech">цифровые решения</span>. Наша команда профессионалов создаёт 
              уникальный фитнес-опыт для каждого клиента.
            </p>
            <div className="tech-grid">
              <div className="tech-item">
                <h4 className="tech-title">Приложение</h4>
                <ul className="centered-list">
                  <li>Управление тренировками</li>
                  <li>Мониторинг загрузки зала</li>
                  <li>Бонусная система</li>
                  <li>Удалённое оформление контрактов</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
