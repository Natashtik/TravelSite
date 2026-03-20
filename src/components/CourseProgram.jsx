import './CourseProgram.css'

function CourseProgram() {
  const modules = [
    {
      id: 1,
      title: 'Аэропорт без стресса',
      desc: 'Регистрация, паспортный контроль, вопросы на таможне — всё на английском. Уверенность уже в первые часы за границей.',
      icon: '🛫',
    },
    {
      id: 2,
      title: 'В отеле: заселение и помощь',
      desc: 'Как попросить сменить номер, вызвать уборку или спросить про Wi-Fi. Практика вежливых фраз и повседневной лексики.',
      icon: '🏨',
    },
    {
      id: 3,
      title: 'Кафе и рестораны',
      desc: 'Заказ еды, вопросы про аллергены, счёт и чаевые. Развитие гастрономического словаря и уверенности в общении.',
      icon: '🍽️',
    },
    {
      id: 4,
      title: 'На улице: ориентирование и просьбы',
      desc: 'Как спросить дорогу, вызвать такси или найти аптеку. Понимание устной речи и произношения в реальных ситуациях.',
      icon: '🗺️',
    },
    {
      id: 5,
      title: 'Экстренные случаи',
      desc: 'Потеря вещей, болезнь, помощь полиции — всё это на английском. Важные фразы, которые могут спасти отпуск.',
      icon: '🆘',
    },
    {
      id: 6,
      title: 'Туризм и развлечения (уроки 6–8)',
      desc: 'Покупка билетов, экскурсии, общение с гидами, музеи и парки. Погружение в культурный контекст через язык.',
      icon: '🎫',
    },
    {
      id: 7,
      title: 'Дружба в путешествиях',
      desc: 'Как познакомиться с другими детьми или подростками за границей. Игровая практика диалогов и неформального общения.',
      icon: '🤝',
    },
    {
      id: 8,
      title: 'Дипломный проект: «Мой идеальный отпуск»',
      desc: 'Ребёнок планирует воображаемое путешествие и представляет его на английском. Развитие связной речи и творческого самовыражения.',
      icon: '⭐',
    },
  ]

  return (
    <section id="program" className="course-program">
      <h2 className="course-program__title section-title">Программа курса</h2>
      <p className="course-program__intro">
        10 уроков — от аэропорта до дружбы с ребятами со всего мира
      </p>
      <div className="course-program__timeline">
        {modules.map((module, index) => (
          <article key={module.id} className="course-program__item">
            <div className="course-program__item-marker">
              <span className="course-program__item-num">{module.id}</span>
              <div className="course-program__item-line"></div>
            </div>
            <div className="course-program__card">
              <div className="course-program__card-icon">{module.icon}</div>
              <div className="course-program__card-content">
                <h3 className="course-program__card-title">{module.title}</h3>
                <p className="course-program__card-desc">{module.desc}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default CourseProgram
