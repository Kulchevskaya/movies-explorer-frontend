import React from 'react';

function AboutMe() {
  return (
    <div className="AboutMe">
      <h2 className="AboutMe__header">Студент</h2>
      <hr className="AboutMe__line" />
      <div className="AboutMe__columns">
        <div className="AboutMe__column">
          <h3 className="AboutMe__name">Виталий</h3>
          <p className="AboutMe__job">Фронтенд-разработчик, 30 лет</p>
          <p className="AboutMe__info">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
          <div className="AboutMe__sites">
            <a className="AboutMe__site" target="_blank" rel="noopener noreferrer" href='https://www.facebook.com/public/%D0%92%D0%B8%D1%82%D0%B0%D0%BB%D0%B8%D0%B9-%D0%92%D0%B8%D1%82%D0%B0%D0%BB%D0%B8%D0%B9'>Facebook</a>
            <a className="AboutMe__site" target="_blank" rel="noopener noreferrer" href='https://github.com/Vitaliy-1'>Git</a>
          </div>
        </div>
        <div className="AboutMe__photo"></div>
      </div>
    </div>
  );
}

export default AboutMe;