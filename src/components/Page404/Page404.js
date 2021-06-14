import React from 'react';
import { useHistory } from 'react-router-dom';
import { Link, withRouter } from "react-router-dom";

function Page404() {
  const history = useHistory();
  function goBack() {
    history.goBack();
  }

  return (
    <div className="Page404">
      <h2 className="Page404__header">404</h2>
      <p className="page404__text">Страница не найдена</p>
      <Link to='/' className="Page404__link" onClick={goBack}>Назад</Link>
    </div>
  );
}

export default withRouter(Page404);