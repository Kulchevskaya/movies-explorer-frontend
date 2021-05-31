import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
  const [width, setWidth] = React.useState(window.innerWidth);
  const ROUTE_MAIN = '/';
  const ROUTE_MOVIES = '/movies';
  const ROUTE_SAVED_MOVIES = '/saved-movies';
  const hamburger_main = (
    `header__hamburger-item ${window.location.pathname === ROUTE_MAIN ? 'header__hamburger-item_underlined' : ''}`
  )
  const hamburger_movies = (
    `header__hamburger-item ${window.location.pathname === ROUTE_MOVIES ? 'header__hamburger-item_underlined' : ''}`
  )
  const hamburger_saved_movies = (
    `header__hamburger-item ${window.location.pathname === ROUTE_SAVED_MOVIES ? 'header__hamburger-item_underlined' : ''}`
  )
  
  // эффект для мониторинга изменения размера окна и вызова ререндера страницы
  React.useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);
    return _ => window.removeEventListener('resize', handleResize);
  }, [width]);

  if (width >= 769) {
    return (
      <div className="header">
        <Link to="/"><div className="header__logo"></div></Link>
        <ul className="header__menu">
          <li>
            <Link className="header__menu-films" to="/movies">Фильмы</Link>
          </li>
          <li>
            <Link className="header__menu-saved" to="/saved-movies">Сохраненные фильмы</Link>
          </li>
          <li>
            <Link className="header__menu-account" to="/profile">Аккаунт</Link>
          </li>          
        </ul>
      </div>
    )
  }
  
  if (width < 769) {
    return (
      <div className="header">
        <Link to="/"><div className="header__logo"></div></Link>
        <div className="header__hamburger-menu">
          <input id="menu__toggle" type="checkbox" />
          <label className="header__hamburger-icon" for="menu__toggle">
            <span></span>
          </label>

          <ul className="header__hamburger-list">
            <li><a className={hamburger_main} href="/">Главная</a></li>
            <li><a className={hamburger_movies} href="/movies">Фильмы</a></li>
            <li><a className={hamburger_saved_movies} href="/saved-movies">Сохраненные фильмы</a></li>
            <li><a className="header__hamburger-button" href="/profile">Аккаунт</a></li>
          </ul>
        </div>
      </div>
    )
    
  }
  
}

export default Header;
