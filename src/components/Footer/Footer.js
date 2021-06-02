function Footer() {
  return (
    <div className="footer">
      <div className="footer__container">
        <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
        <hr className="footer__line" />
        <div className="footer__wrapper">
          <p className="footer__copyright">© 2020</p>
          <ul className="footer__list">
            <li className="footer__item"><a className="footer__link" href="https://praktikum.yandex.ru/">Яндекс.Практикум</a></li>
            <li className="footer__item"><a className="footer__link" href="https://github.com/">Github</a></li>
            <li className="footer__item"><a className="footer__link" href="https://www.facebook.com/">Facebook</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
