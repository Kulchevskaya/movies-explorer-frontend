import React from 'react';
import Header from '../Header/Header.js';
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';
import useFormWithValidation from '../../utils/Validation.js';
import { validateProfile } from '../../utils/RulesValidation.js';

function Profile(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const [edit, setEdit] = React.useState(false);
  const [isActive, setIsActive] = React.useState(true);

  function handleEdit() {
    setEdit(true);
  }

  const {
    values,
    errors,
    isValid,
    setValues,
    handleChange
  } = useFormWithValidation(validateProfile);

  React.useEffect(() => {
    setValues(currentUser)
  },[currentUser]);

  React.useEffect(() => {
    if (isValid && (currentUser.name !== values.name || currentUser.email !== values.email))
     setIsActive(false);
  }, [values]);

  function handleSubmit(evt) {
    evt.preventDefault();
    props.onEdit(values);
    if (props.error === "Успешно") {
      setEdit(false);
    }
  }

  return (
    <div>
      <Header loggedIn={props.loggedIn} />
      <div className="profile">
        <h3 className="profile__heading">Привет, {values.name}!</h3>
        <form className="profile__form form_type_profile" method="POST" name="register-form" noValidate onSubmit={handleSubmit}>
          <div className="profile__wrapper">
            <label className="profile__label" htmlFor="name">Имя</label>
            <input className="profile__input profile__input_type_name" name="name" id="name"
                type="text" required disabled={edit ? false : true}
                value={values.name || ''} onChange={handleChange} />
            {errors.name && (
                        <p className="profile__error-text">{errors.name}</p>
                      )}
          </div>
          <div className="profile__wrapper">
            <label className="profile__label" htmlFor="email">Почта</label>      
            <input className="profile__input profile__input_type_email" name="email" id="email"
                type="email" required disabled={edit ? false : true}
                value={values.email || ''} onChange={handleChange} />
            {errors.email && (
                        <p className="profile__error-text">{errors.email}</p>
                      )}
          </div>
          { edit ? 
            <div className="profile__wrapper">
              <p className="profile__apierror-text">{props.error}</p> 
              <button disabled={isActive} type="submit" className="profile__submit-button">Сохранить</button>
            </div>
          :
          <ul className="profile__links">
            <li className="profile__edit" onClick={handleEdit}>Редактировать</li>
            <li onClick={props.signOut} className="profile__signout">Выйти из аккаунт</li>
          </ul>
          }
        </form>
      </div>
    </div>
  );
}

export default Profile;