import './Footer.css'

function Footer({ scrollToSection }) {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__content">
          <p className="footer__text">
            Сделайте первый шаг к путешествиям без языкового барьера
          </p>
          <button 
            className="footer__cta cta-button cta-button--primary"
            onClick={() => scrollToSection('final-cta')}
          >
            Записаться на курс
          </button>
        </div>
        <div className="footer__bottom">
          <span className="footer__logo">✈ English for Travel</span>
          <p className="footer__copyright">© Курс «Английский для путешествий»</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
