import { useState, useEffect } from 'react';

const useFormWithValidation = (validate) => {

  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (event) => {
    setValues(values => ({ ...values, [event.target.name]: event.target.value }));
    setErrors(validate(values));
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0) {
      setIsValid(true);
    } else {
      setIsValid(false)
    }
  }, [errors]);

  return {
    handleChange,
    setIsValid,
    setValues,
    values,
    errors,
    isValid
  }
};

export default useFormWithValidation;
