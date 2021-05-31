import React from 'react';
import { Link, withRouter } from "react-router-dom";

function Page404() {
  return (
    <div className="Page404">
      <h2 className="Page404__header">404</h2>
      <p className="page404__text">Страница не найдена</p>
      <Link to='/' className="Page404__link">Назад</Link>
    </div>
  );
}

export default withRouter(Page404);