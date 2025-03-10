import React from "react";
import "./Reviews.scss";

const Reviews = () => {
  const testimonials = [
    {
      id: 1,
      name: "Анна Петрова",
      role: "Постоянный клиент",
      text: "Отличный сервис и внимательное отношение! Всегда приятно возвращаться сюда снова и снова.",
      date: "15 мая 2025",
      avatarType: 'image',
      avatarUrl: '/assets/anna-petrova.jpg'
    },
    {
      id: 2,
      name: "Максим Иванов",
      role: "Первое посещение",
      text: "Впечатлён качеством обслуживания. Приятная атмосфера и профессиональный подход к делу.",
      date: "10 мая 2025",
      avatarType: 'image',
      avatarUrl: '/assets/maksim-ivanov.jpg'
    },
    {
      id: 3,
      name: "Елена Сидорова",
      role: "Рекомендация",
      text: "Лучшее сочетание цены и качества. Обязательно буду рекомендовать друзьям и знакомым!",
      date: "5 мая 2025",
      avatarType: 'svg'
    }
  ];

  const UserIcon = () => (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="avatar-svg"
    >
      <path 
        d="M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm0 6c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm6 4H6v-.99c.2-.72 3.3-2.01 6-2.01s5.8 1.29 6 2v1z" 
        fill="currentColor"
      />
    </svg>
  );

  const renderAvatar = (review) => {
    switch (review.avatarType) {
      case 'image':
        return (
          <div className="avatar-circle has-image">
            <img 
              src={review.avatarUrl} 
              alt={review.name}
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextElementSibling.style.display = 'block';
              }}
            />
            <UserIcon className="fallback-icon" />
          </div>
        );
      
      case 'initials':
        return (
          <div className="avatar-circle gradient-avatar">
            <span className="avatar-initials">{review.name}</span>
          </div>
        );

      default:
        return (
          <div className="avatar-circle">
            <UserIcon />
          </div>
        );
    }
  };

  return (
    <section className="reviews-container">
      <div className="reviews-header">
        <h2 className="section-title">Отзывы наших клиентов</h2>
      </div>
      
      <div className="reviews-grid">
        {testimonials.map((review) => (
          <div key={review.id} className="review-card">
            <div className="review-header">
              {renderAvatar(review)}
              <div className="review-meta">
                <h3 className="review-name">{review.name}</h3>
                <div className="review-info">
                  <span className="review-role">{review.role}</span>
                  <span className="review-date">{review.date}</span>
                </div>
              </div>
            </div>
            
            <div className="review-body">
              <p className="review-text">"{review.text}"</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
