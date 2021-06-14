import React from 'react';
import { withRouter } from 'react-router-dom';
import Form from '../Form/Form.js';
import useFormWithValidation from '../../utils/Validation.js';
import { validateLogin } from '../../utils/RulesValidation.js';

function Login(props) {
  const {
    values,
    errors,
    isValid,
    setIsValid,
    handleChange
  } = useFormWithValidation(validateLogin);

  // disable form from the start
  React.useEffect(() => {
    if (Object.keys(values).length === 0) {
      setIsValid(false)
    }
  }, [setIsValid, values]);

  function handleSubmit(evt) {
    evt.preventDefault();
    props.onLogin(values);
  }

  return (
    <Form handleSubmit={handleSubmit} type="login" heading="Рады видеть!" button="Войти"
        sign="Еще не зарегистрированы?" url="signin" link="Регистрация" valid={isValid}>
        <div className="form__wrapper">
          <label className="form__field" htmlFor="email">E-mail</label>
          <input className="form__item form-item_type_email-input" name="email" id="email"
              type="e-mail" required value={values.email || ''} onChange={handleChange} />
          {errors.email && (
                      <p className="form__error-text">{errors.email}</p>
                    )}
        </div>
        <div className="form__wrapper">
          <label className="form__field" htmlFor="password">Пароль</label>      
          <input className="form__item form-item_type_job-input" name="password" id="password"
              type="password" minLength="6" maxLength="20" required 
              value={values.password || ''} onChange={handleChange} />
          {errors.password && (
                      <p className="form__error-text">{errors.password}</p>
                    )}
        </div>
        <p className="form__apierror-text">{props.error}</p> 
    </Form> 
  )
}

export default withRouter(Login);
