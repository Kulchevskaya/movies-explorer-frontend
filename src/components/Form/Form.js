import { Link } from 'react-router-dom';

function Form(props) {
  return (
    <form className={`form form_type_${props.type}`} method="POST" name="register-form" noValidate onSubmit={props.handleSubmit}>
      <div className="form__logo"></div>
      <h3 className="form__heading">{props.heading}</h3>
      {props.children}
      <button type="submit" disabled={!props.valid} className={`form__submit-button form__submit-button_type_${props.type}`}>{props.button}</button>
      <div className="form__sign">
        <p className="form__sign-text">{props.sign}</p>
        <Link to={`${props.url}`} className="form__sign-link">{props.link}</Link>
      </div>
    </form> 
  );
}

export default Form;