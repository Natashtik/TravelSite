import './WhatNeeded.css'

function WhatNeeded() {
  const items = [
    {
      id: 1,
      text: 'Стационарный компьютер или ноутбук с наушниками и микрофоном',
      icon: '💻',
    },
    {
      id: 2,
      text: 'Стабильный интернет и Zoom',
      icon: '📶',
    },
  ]

  return (
    <section id="what-needed" className="what-needed">
      <h2 className="what-needed__title section-title">Что потребуется</h2>
      <p className="what-needed__intro">
        Всё просто — нужен только компьютер и желание путешествовать
      </p>
      <div className="what-needed__list">
        {items.map((item) => (
          <div key={item.id} className="what-needed__item">
            <span className="what-needed__icon">{item.icon}</span>
            <span className="what-needed__text">{item.text}</span>
          </div>
        ))}
      </div>
      <div className="what-needed__deco">🌐</div>
    </section>
  )
}

export default WhatNeeded
