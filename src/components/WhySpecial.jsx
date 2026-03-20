import './WhySpecial.css'

function WhySpecial() {
  const points = [
    {
      id: 1,
      text: 'Акцент на практическую, живую речь, а не на грамматику ради грамматики',
      icon: '💬',
    },
    {
      id: 2,
      text: 'Все ситуации — из реальной жизни путешественника',
      icon: '🌍',
    },
    {
      id: 3,
      text: 'Интерактивные задания: ролевые игры, аудиоситуации, мини-квесты',
      icon: '🎮',
    },
    {
      id: 4,
      text: 'Ребёнок выходит на уровень A2–B1 (Pre-Intermediate) за курс',
      icon: '📈',
    },
  ]

  return (
    <section id="why-special" className="why-special">
      <div className="why-special__bg"></div>
      <h2 className="why-special__title section-title">Почему этот курс особенный?</h2>
      <p className="why-special__intro">
        Не очередной учебник — живой английский для реальных поездок
      </p>
      <div className="why-special__grid">
        {points.map((point) => (
          <div key={point.id} className="why-special__card">
            <div className="why-special__card-icon">{point.icon}</div>
            <p className="why-special__card-text">{point.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default WhySpecial
