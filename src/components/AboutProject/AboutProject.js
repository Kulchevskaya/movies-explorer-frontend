import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';

function AboutProject() {
  return (
    <ScrollableAnchor id={'aboutproject'}>
      <div className="AboutProject">
        <h2 className="AboutProject__header">О проекте</h2>
        <hr className="AboutProject__line" />
        <div className="AboutProject__description">
          <div className="AboutProject__column">
            <h3 className="AboutProject__subheader">Дипломный проект включал 5 этапов</h3>
            <p className="AboutProject__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          </div>
          <div className="AboutProject__column">
            <h3 className="AboutProject__subheader">На выполнение диплома ушло 5 недель</h3>
            <p className="AboutProject__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
          </div>
        </div>
        <div className="AboutProject__description">
          <div className="AboutProject__container">
            <div className="AboutProject__container_color_blue">
              <p className="AboutProject__text AboutProject__text_color_white">1 неделя</p>
            </div>
            <p className="AboutProject__text AboutProject__text_color_grey">Back-end</p>
          </div>
          <div className="AboutProject__container">
            <div className="AboutProject__container_color_grey">
              <p className="AboutProject__text">4 недели</p>
            </div>
            <p className="AboutProject__text AboutProject__text_color_grey"> Front-end</p>
          </div>
        </div>
      </div>
    </ScrollableAnchor>
  );
}

export default AboutProject;