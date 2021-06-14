// Параметры для валидатора форм
import validator from 'validator';

export function validateRegister(values) {
  let errors = {};

  if (!values.name) {
    errors.name = 'Обязательное поле';
  } else if (!/^[a-zA-Z \u{0400}-\u{04FF}\s]+$/u.test(values.name)) {
    errors.name = 'Только кириллица и латиница';
  }

  if (!values.email) {
    errors.email = 'Обязательное поле';
  } else if (!validator.isEmail(values.email)) {
    errors.email = 'Некорректный Email';
  }

  if (!values.password) {
    errors.password = 'Обязательное поле';
  } else if (values.password.length <= 5) {
    errors.password = 'Пароль не меньше 6 знаков';
  }
  else if (values.password.length > 20) {
    errors.password = 'Пароль не больше 20 знаков';
  }

  return errors;
};

export function validateLogin(values) {
  let errors = {};

  if (!values.email) {
    errors.email = 'Обязательное поле';
  } else if (!validator.isEmail(values.email)) {
    errors.email = 'Некорректный Email';
  }

  if (!values.password) {
    errors.password = 'Обязательное поле';
  } else if (values.password.length <= 5) {
    errors.password = 'Пароль не меньше 6 знаков';
  }
  else if (values.password.length > 20) {
    errors.password = 'Пароль не больше 20 знаков';
  }

  return errors;
};

export function validateProfile(values) {
  let errors = {};
  
  if (!values.name) {
    errors.name = 'Обязательное поле';
  } else if (!/^[a-zA-Z \u{0400}-\u{04FF}\s]+$/u.test(values.name)) {
    errors.name = 'Только кириллица и латиница';
  }

  if (!values.email) {
    errors.email = 'Обязательное поле';
  } else if (!validator.isEmail(values.email)) {
    errors.email = 'Некорректный Email';
  }

  return errors;
};


