const validateForm = fields => {
  const errors = {
    // email: '',
    // username: '',
    // password: '',
    // repass: '',
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

  if (!fields.password) {
    errors.password = 'Password is required';
  } else if (fields.password.length < 6) {
    errors.password = 'Password must be 6 or more characters';
  }
  // else errors.password = '';

  if (!fields.repass) {
    errors.repass = 'Confirm your password';
  } else if (fields.repass !== fields.password) {
    errors.repass = 'Confirm password does not match';
  }

  // console.log(fields.email, fields.username, fields.password, fields.repass);
  // console.log('validate return: ', errors.email, errors.username, errors.password, errors.repass);

  return errors;
};

export default validateForm;
