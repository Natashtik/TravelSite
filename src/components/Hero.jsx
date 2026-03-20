import './Hero.css'

function Hero({ scrollToSection }) {
  return (
    <section id="hero" className="hero">
      <div className="hero__bg">
        <div className="hero__gradient"></div>
        <div className="hero__grid"></div>
        <div className="hero__horizon"></div>
        <div className="hero__runway-wrap">
          <div className="hero__runway-lights">
            {[...Array(12)].map((_, i) => (
              <span key={i} className="hero__runway-light" style={{ '--i': i }}></span>
            ))}
          </div>
          <div className="hero__runway"></div>
        </div>
        <div className="hero__route-line hero__route-line--1"></div>
        <div className="hero__route-line hero__route-line--2"></div>
        <div className="hero__plane">✈</div>
        <div className="hero__plane hero__plane--2">✈</div>
        <div className="hero__deco hero__deco--globe">🌐</div>
        <div className="hero__deco hero__deco--luggage">🧳</div>
        <div className="hero__deco hero__deco--ticket">🎫</div>
        <div className="hero__glow hero__glow--1"></div>
        <div className="hero__glow hero__glow--2"></div>
        <div className="hero__glow hero__glow--3"></div>
      </div>

      <div className="hero__content">
        <p className="hero__label">Онлайн-курс для детей</p>
        <h1 className="hero__title">
          Курс «Английский для путешествий»
        </h1>
        <p className="hero__subtitle">
          Мечтаете свободно общаться за границей — от заказа кофе до поиска утраченного чемодана? 
          Этот курс научит вашего ребёнка реальному разговорному английскому, который пригодится 
          в отпуске, поездках и будущих путешествиях.
        </p>
        <div className="hero__buttons">
          <button 
            className="cta-button cta-button--primary hero__cta"
            onClick={() => scrollToSection('final-cta')}
          >
            Записаться на курс
          </button>
          <button 
            className="cta-button cta-button--outline hero__cta"
            onClick={() => scrollToSection('program')}
          >
            Смотреть программу
          </button>
        </div>
      </div>

      <div className="hero__scroll">
        <span className="hero__scroll-text">Листайте вниз</span>
        <div className="hero__scroll-arrow"></div>
      </div>
    </section>
  )
}

export default Hero
