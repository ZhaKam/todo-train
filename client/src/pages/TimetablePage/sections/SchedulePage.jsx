import React from 'react';
import './SchedulePage.scss';

export default function SchedulePage() {
  const schedule = [
    {
      id: 1,
      day: 'Понедельник',
      classes: [
        { time: '09:00 - 10:00', name: 'Класс йоги', price: '£10 - £15', trainer: 'Emily Johnson' },
        { time: '12:00 - 13:00', name: 'Класс аэробики', price: '£8 - £12', trainer: 'James Smith' },
        { time: '18:00 - 19:00', name: 'Групповые программы', price: '£10 - £15', trainer: 'Olivia Brown' },
      ],
    },
    {
      id: 2,
      day: 'Вторник',
      classes: [
        { time: '10:00 - 11:00', name: 'Класс пилатеса', price: '£10 - £15', trainer: 'Sophia Taylor' },
        { time: '14:00 - 15:00', name: 'Функциональный тренинг', price: '£10 - £15', trainer: 'William Wilson' },
        { time: '19:00 - 20:00', name: 'Персональный тренер', price: '£30 - £60', trainer: 'Charlotte Evans' },
      ],
    },
    {
      id: 3,
      day: 'Среда',
      classes: [
        { time: '09:00 - 10:00', name: 'Класс йоги', price: '£10 - £15', trainer: 'Emily Johnson' },
        { time: '12:00 - 13:00', name: 'Класс аэробики', price: '£8 - £12', trainer: 'James Smith' },
        { time: '18:00 - 19:00', name: 'Групповые программы', price: '£10 - £15', trainer: 'Olivia Brown' },
      ],
    },
    {
      id: 4,
      day: 'Четверг',
      classes: [
        { time: '10:00 - 11:00', name: 'Класс пилатеса', price: '£10 - £15', trainer: 'Sophia Taylor' },
        { time: '14:00 - 15:00', name: 'Функциональный тренинг', price: '£10 - £15', trainer: 'William Wilson' },
        { time: '19:00 - 20:00', name: 'Персональный тренер', price: '£30 - £60', trainer: 'Charlotte Evans' },
      ],
    },
    {
      id: 5,
      day: 'Пятница',
      classes: [
        { time: '09:00 - 10:00', name: 'Класс йоги', price: '£10 - £15', trainer: 'Emily Johnson' },
        { time: '12:00 - 13:00', name: 'Класс аэробики', price: '£8 - £12', trainer: 'James Smith' },
        { time: '18:00 - 19:00', name: 'Групповые программы', price: '£10 - £15', trainer: 'Olivia Brown' },
      ],
    },
    {
      id: 6,
      day: 'Суббота',
      classes: [
        { time: '10:00 - 11:00', name: 'Класс пилатеса', price: '£10 - £15', trainer: 'Sophia Taylor' },
        { time: '14:00 - 15:00', name: 'Функциональный тренинг', price: '£10 - £15', trainer: 'William Wilson' },
      ],
    },
    {
      id: 7,
      day: 'Воскресенье',
      classes: [
        { time: '10:00 - 11:00', name: 'Класс йоги', price: '£10 - £15', trainer: 'Emily Johnson' },
        { time: '12:00 - 13:00', name: 'Класс аэробики', price: '£8 - £12', trainer: 'James Smith' },
      ],
    },
  ];

  return (
    <section className="schedule-page">
      <div className="centered-container">
        <h2 className="section-title">Расписание занятий</h2>

        <table className="schedule-table">
          <thead>
            <tr>
              <th>День</th>
              <th>Время</th>
              <th>Занятие</th>
              <th>Цена</th>
              <th>Тренер</th>
            </tr>
          </thead>
          <tbody>
            {schedule.map((day) =>
              day.classes.map((cls, index) => (
                <tr key={`${day.id}-${index}`}>
                  {index === 0 && (
                    <td rowSpan={day.classes.length} className="day-cell">
                      {day.day}
                    </td>
                  )}
                  <td>{cls.time}</td>
                  <td>{cls.name}</td>
                  <td>{cls.price}</td>
                  <td>{cls.trainer}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}