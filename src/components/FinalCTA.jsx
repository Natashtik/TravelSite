import './FinalCTA.css'

function FinalCTA({ scrollToSection }) {
  return (
    <section id="final-cta" className="final-cta">
      <div className="final-cta__bg"></div>
      <div className="final-cta__content">
        <p className="final-cta__label">Набор открыт!</p>
        <h2 className="final-cta__title">
          Группы маленькие — максимум 6 детей
        </h2>
        <p className="final-cta__subtitle">
          чтобы каждый получил внимание. Места ограничены!
        </p>
        <p className="final-cta__text">
          Запишитесь сейчас — и следующее путешествие станет первым, где ваш ребёнок 
          заговорит по-английски без страха.
        </p>
        <button 
          className="cta-button cta-button--primary final-cta__button"
          onClick={() => {}}
        >
          Записаться на курс
        </button>
      </div>
      <div className="final-cta__deco final-cta__deco--1">✈</div>
      <div className="final-cta__deco final-cta__deco--2">🧳</div>
    </section>
  )
}

export default FinalCTA
