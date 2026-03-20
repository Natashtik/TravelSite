import './Schedule.css'

function Schedule() {
  const slots = [
    {
      id: 1,
      day: 'Четверг',
      time: '15:00',
      tz: 'МСК',
      group: 'Группа 4–5 класс',
    },
    {
      id: 2,
      day: 'Пятница',
      time: '15:30',
      tz: 'МСК',
      group: 'Группа 6–8 класс',
    },
  ]

  return (
    <section id="schedule" className="schedule">
      <h2 className="schedule__title section-title">Расписание</h2>
      <p className="schedule__intro">
        Занятия проходят онлайн — выбирайте удобную группу
      </p>
      <div className="schedule__grid">
        {slots.map((slot) => (
          <div key={slot.id} className="schedule__card">
            <div className="schedule__card-day">{slot.day}</div>
            <div className="schedule__card-time">
              <span className="schedule__card-time-value">{slot.time}</span>
              <span className="schedule__card-tz">({slot.tz})</span>
            </div>
            <div className="schedule__card-group">{slot.group}</div>
            <div className="schedule__card-deco">🕐</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Schedule
