import React from 'react';

function Profile(props) {
  const [data, setData] = React.useState({
    name: "",
    email: "",
  });

  function handleChange(evt) {
    const { name, value } = evt.target;
    setData({
      ...data,
      [name]: value,
    })
  }

  const [edit, setEdit] = React.useState(false);

  function handleEdit() {
    setEdit(true);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    // props.onRegister(data);
    setEdit(false);
  }

  return (
    <div className="profile">
      <h3 className="profile__heading">Привет, Виталий!</h3>
      <form className="profile__form form_type_profile" method="POST" name="register-form" noValidate onSubmit={handleSubmit}>
        <label className="profile__label" htmlFor="name">Имя</label>
        <input className="profile__input profile__input_type_name" name="name" id="name"
            type="text" required disabled={edit ? false : true}
            value={data.name || ''} onChange={handleChange} />
        <label className="profile__label" htmlFor="email">Почта</label>      
        <input className="profile__input profile__input_type_email" name="email" id="email"
            type="email" required disabled={edit ? false : true}
            value={data.email || ''} onChange={handleChange} />
        { edit ? 
          <button type="submit" className="profile__submit-button">Сохранить</button>
        :
        <ul className="profile__links">
          <li className="profile__edit" onClick={handleEdit}>Редактировать</li>
          <li onClick={props.signout} className="profile__signout">Выйти из аккаунт</li>
        </ul>
        }
      </form>
    </div>
  );
}

export default Profile;