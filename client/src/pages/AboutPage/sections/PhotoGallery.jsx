import React from 'react';
import './PhotoGallery.scss'; 

export default function PhotoGallery() {
  const photos = [
    { id: 1, src: '/assets/photo_1.jpg', caption: 'Кардио-зона с панорамным остеклением' },
    { id: 2, src: '/assets/photo_2.jpg', caption: 'Силовая зона с тренажерами Hammer Strength' },
    { id: 3, src: '/assets/photo_3.jpg', caption: 'Функциональная зона с комплексом Synrgy360T' },
    { id: 4, src: '/assets/photo_4.jpg', caption: 'Сайкл-студия с тренажерами IC6' },
    { id: 5, src: '/assets/photo_5.jpg', caption: 'Коворкинг-зона для отдыха' },
    { id: 6, src: '/assets/photo_6.jpg', caption: 'Зал групповых занятий' },
  ];

  return (
    <section className="photo-gallery">
      <div className="centered-container">
        <h2 className="section-title">Фотогалерея клуба ADRENALINEBOOST</h2>

        <div className="gallery-grid">
          {photos.map((photo) => (
            <div key={photo.id} className="gallery-item">
              <img 
                src={photo.src} 
                alt={photo.caption} 
                className="gallery-photo"
              />
              <div className="photo-caption">{photo.caption}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}