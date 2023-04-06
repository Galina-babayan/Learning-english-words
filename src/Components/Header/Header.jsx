import "./Header.scss";

export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <a href="#" className="header__logo">
          {" "}
        </a>
        <div className="neader__menu menu">
          <div className="menu__icon">
            <span></span>
          </div>
          <nav className="menu__body">
            <ul className="menu__list">
              <li>
                <a data-goto=".library" href="./" className="menu__link">
                  Темы
                </a>
              </li>
              <li>
                <a data-goto=".cards" href="./" className="menu__link">
                  Карточки
                </a>
              </li>
              <li>
                <a data-goto=".words" href="./" className="menu__link">
                  Библиотека
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
