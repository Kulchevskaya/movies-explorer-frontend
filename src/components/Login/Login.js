import React from 'react';
import { withRouter } from 'react-router-dom';
import Form from '../Form/Form.js';

function Login(props) {
  const [data, setData] = React.useState({
    email: "",
    password: "",
  });

  function handleChange(evt) {
    const { name, value } = evt.target;
    setData({
      ...data,
      [name]: value,
    })
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    // props.onRegister(data);
  }

  return (
    <Form handleSubmit={handleSubmit} type="login" heading="Рады видеть!" button="Войти"
        sign="Еще не зарегистрированы?" url="signin" link="Регистрация">
        <label className="form__field" htmlFor="email">E-mail</label>
        <input className="form__item form-item_type_email-input" name="email" id="email"
            type="e-mail" required value={data.email || ''} onChange={handleChange} />
        <span className="form__error-text" id="email-error"></span>  
        <label className="form__field" htmlFor="password">Пароль</label>      
        <input className="form__item form-item_type_job-input" name="password" id="password"
            type="password" minLength="6" maxLength="20" required 
            value={data.password || ''} onChange={handleChange} />
        <span className="form__error-text" id="password-error"></span>
    </Form> 
  )
}

export default withRouter(Login);
