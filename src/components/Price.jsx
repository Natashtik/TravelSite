import './Price.css'

function Price() {
  return (
    <section id="price" className="price">
      <h2 className="price__title section-title">Стоимость</h2>
      <p className="price__intro">
        Выгоднее взять полный курс — экономия более 1000 руб
      </p>
      <div className="price__grid">
        <div className="price__card price__card--main">
          <div className="price__card-badge">Выгодно</div>
          <h3 className="price__card-name">Полный курс</h3>
          <p className="price__card-desc">10 уроков</p>
          <div className="price__card-value">12 000 ₽</div>
          <p className="price__card-note">1 200 ₽ за урок</p>
        </div>
        <div className="price__card">
          <h3 className="price__card-name">Абонемент</h3>
          <p className="price__card-desc">Поурочная оплата</p>
          <div className="price__card-value">1 300 ₽</div>
          <p className="price__card-note">за урок</p>
        </div>
      </div>
    </section>
  )
}

export default Price
