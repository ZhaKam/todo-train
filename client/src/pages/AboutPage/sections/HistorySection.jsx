import React from 'react';
import './HistorySection.scss';

export default function HistorySection() {
  return (
    <section className="history-section">
      <div className="centered-container">
        <h2 className="section-title">История клуба «ADRENALINEBOOST»</h2>

        <div className="content-block">
          <p className="centered-text">
            Фитнес-клуб ADRENALINEBOOST открылся в мае 2021 года. Стильный и просторный клуб находится рядом с крупным торгово-развлекательным центром Westfield London на улице Oxford Street в районе Вестминстер.
          </p>
        </div>

        <div className="content-block">
          <h3 className="subtitle">О сети ADRENALINEBOOST</h3>
          <p className="centered-text">
            ADRENALINEBOOST является одним из самых узнаваемых брендов на территории Великобритании. Клубы сети предоставляют услуги высокого профессионального уровня по ценам, доступным для широкого круга людей абсолютно разного возраста, профессий и интересов. Для клубов ADRENALINEBOOST характерен индивидуальный подход к каждому клиенту.
          </p>
        </div>

        <div className="content-block">
          <h3 className="subtitle">Особенности клуба</h3>
          <p className="centered-text">
            В клубе на Oxford Street есть все, что нужно современному жителю мегаполиса: от вдохновляющей атмосферы, уникального дизайна и самого высококачественного оборудования до коворкинг-зоны и современных технологий управления своими тренировками через приложение. Расположение фитнес-клуба рядом с ТРЦ Westfield London дает возможность совмещать тренировки с шоппингом, личными и деловыми встречами.
          </p>
        </div>

        <div className="content-block">
          <h3 className="subtitle">Зоны клуба</h3>
          <ul className="centered-list">
            <li>Кардио-зона с панорамным остеклением</li>
            <li>Зона для силовых и функциональных тренировок</li>
            <li>Залы для групповых занятий</li>
          </ul>
        </div>

        <div className="content-block">
          <h3 className="subtitle">Технологии и оборудование</h3>
          <div className="tech-grid">
            <div className="tech-item">
              <h4 className="tech-title">Кардиозона</h4>
              <p>Оснащена тренажёрами Life Fitness с консолями Integrity SX, системой Flex Deck для снижения нагрузки на суставы.</p>
            </div>
            <div className="tech-item">
              <h4 className="tech-title">Силовая зона</h4>
              <p>Тренажеры Hammer Strength Select для изолированных групп мышц, QR-коды для доступа к видеоинструкциям.</p>
            </div>
            <div className="tech-item">
              <h4 className="tech-title">Функциональная зона</h4>
              <p>Комплекс Synrgy360T с аксессуарами Escape и петлями TRX для тренировок с весом тела.</p>
            </div>
            <div className="tech-item">
              <h4 className="tech-title">Зона для групповых занятий</h4>
              <p> Оборудована матами для йоги, степ-платформами и гантелями, а также включает в себя аудиосистемы и проекторы.</p>
            </div>
          </div>
        </div>

        <div className="content-block">
          <h3 className="subtitle">Сайкл-студия</h3>
          <p className="centered-text">
            Занятия проводятся на тренажерах IC6 с использованием мультимедийных систем ICG® Connect и ICG® Coach by Color®.
          </p>
        </div>

        <div className="content-block">
          <h3 className="subtitle">Команда ADRENALINEBOOST</h3>
          <p className="centered-text">
            Команда ADRENALINEBOOST – это талантливые люди, настоящие профессионалы своего дела, способные расширить представление о спорте и фитнесе.
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
      </div>
    </section>
  );
}