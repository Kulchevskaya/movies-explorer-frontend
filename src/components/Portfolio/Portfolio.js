import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';

function Portfolio() {
  return (
    <ScrollableAnchor id={'portfolio'}>
      <div className="Portfolio">
        <h2 className="Portfolio__header">Портфолио</h2>
        <div className="Portfolio__container">
          <p className="Portfolio__text">Статичный сайт</p>
          <a className="Portfolio__link" target="_blank" rel="noopener noreferrer" href='https://github.com/Vitaliy-1'>
            <div className="Portfolio__logo-link"></div>
          </a>
        </div>
        <hr className="Portfolio__line" />
        <div className="Portfolio__container">
          <p className="Portfolio__text">Адаптивный сайт</p>
          <a className="Portfolio__link" target="_blank" rel="noopener noreferrer" href='https://github.com/Vitaliy-1'>
            <div className="Portfolio__logo-link"></div>
          </a>
        </div>
        <hr className="Portfolio__line" />
        <div className="Portfolio__container">
          <p className="Portfolio__text">Одностраничное приложение</p>
          <a target="_blank" rel="noopener noreferrer" href='https://github.com/Vitaliy-1'>
            <div className="Portfolio__logo-link"></div>
          </a>
        </div>
      </div>
    </ScrollableAnchor>
  );
}

export default Portfolio;