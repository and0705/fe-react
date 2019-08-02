const validateForm = fields => {
  const errors = {
    // email: '',
    // username: '',
    // password: '',
    // confirm_password: '',
  };

  //   console.log(fields);

  if (!fields.email) {
    errors.email = 'Email address is required';
  } else if (!/\S+@\S+\.\S+/.test(fields.email)) {
    errors.email = 'Email address is invalid';
  }

  if (!fields.username) {
    errors.username = 'Username is required';
  } else if (fields.username.length < 5) {
    errors.username = 'Username must be 5 or more characters';
  }

  if (!fields.old_password) {
    errors.old_password = 'Password is required';
  } else if (fields.old_password.length < 6) {
    errors.old_password = 'Password must be 6 or more characters';
  }

  if (!fields.password) {
    errors.password = 'Password is required';
  } else if (fields.password.length < 6) {
    errors.password = 'Password must be 6 or more characters';
  } else if (fields.password === fields.old_password) {
    errors.password = 'New password must be different from current password';
  }

  if (!fields.confirm_password) {
    errors.confirm_password = 'Confirm your password';
  } else if (fields.confirm_password !== fields.password) {
    errors.confirm_password = 'Confirm password does not match';
  }

  // console.log(fields.email, fields.username, fields.password, fields.confirm_password);
  // console.log('validate return: ', errors.email, errors.username, errors.password, errors.confirm_password);

  return errors;
};

export default validateForm;
