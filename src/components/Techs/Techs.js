import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';

function Techs() {
  return (
    <ScrollableAnchor id={'techs'}>
      <div className="Techs">
        <div className="Techs__container">
          <h2 className="Techs__header">Технологии</h2>
          <hr className="Techs__line" />
          <h3 className="Techs__subheader">7 технологий</h3>
          <p className="Techs__text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
          <div className="Techs__lists">
            <div className="Techs__list">
              <p className="Techs__list_text">HTML</p>
            </div>
            <div className="Techs__list">
              <p className="Techs__list_text">CSS</p>
            </div>
            <div className="Techs__list">
              <p className="Techs__list_text">JS</p>
            </div>
            <div className="Techs__list">
              <p className="Techs__list_text">React</p>
            </div>
            <div className="Techs__list">
              <p className="Techs__list_text">Git</p>
            </div>
            <div className="Techs__list">
              <p className="Techs__list_text">Express.js</p>
            </div>
            <div className="Techs__list">
              <p className="Techs__list_text">mongoDB</p>
            </div>
          </div>
        </div>
      </div>
    </ScrollableAnchor>
  );
}

export default Techs;