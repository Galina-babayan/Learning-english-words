import { Link } from "react-router-dom";

import "./Header.scss";

export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__logo">
          {" "}
        </Link>
        <div className="neader__menu menu">
          <div className="menu__icon">
            <span></span>
          </div>
          <nav className="menu__body">
            <ul className="menu__list">
              <li>
                <Link to="/PageWords" className="menu__link">
                  Таблица слов
                </Link>
              </li>
              <li>
                <Link to="/game" className="menu__link">
                  Карточки
                </Link>
              </li>
              <li>
                <Link to="/PagePlay" className="menu__link">
                  Угадай пару
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
