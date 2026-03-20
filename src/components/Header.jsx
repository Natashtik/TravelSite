import './Header.css'

function Header({ navItems, scrollToSection, isMenuOpen, setIsMenuOpen }) {
  return (
    <header className="header">
      <div className="header__inner">
        <a href="#" className="header__logo" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}>
          <span className="header__logo-icon">✈</span>
          <span className="header__logo-text">English for Travel</span>
        </a>

        <nav className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`}>
          {navItems.map((item) => (
            <button
              key={item.id}
              className="header__nav-link"
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
            </button>
          ))}
          <button
            className="header__cta header__cta--mobile"
            onClick={() => { scrollToSection('final-cta'); setIsMenuOpen(false); }}
          >
            Записаться
          </button>
        </nav>

        <button
          className="header__cta header__cta--desktop"
          onClick={() => scrollToSection('final-cta')}
        >
          Записаться на курс
        </button>

        <button
          className={`header__burger ${isMenuOpen ? 'header__burger--active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Меню"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}

export default Header
