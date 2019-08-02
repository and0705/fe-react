import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import validateForm from 'helpers/validateForm';
import { userServices } from '../../services';

export default () => {
  const [state, setState] = useState({
    // email: '',
    // username: '',
    // password: '',
    // repass: '',
  });

  // const [errors, setErrors] = useState({
  // email: '',
  // username: '',
  // password: '',
  // repass: '',
  // });

  const err = validateForm(state);

  const handleChange = event => {
    // set values for post to server through API
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });

    // setErrors(err);
    // err;
  };

  const handleSubmit = event => {
    // userServices.logout();
    event.preventDefault();

    // handleChange(event);

    // console.log(err);

    // const test = {
    //   a: '',
    //   b: '',
    // };

    // console.log(!_.isEmpty(test));

    // console.log(JSON.stringify(err));
    // console.log('validate username:', err.username, 'validate pass: ', err.password);

    if (!err.username && !err.password) {
      userServices.login({
        username: state.username,
        password: state.password,
      });
    } else {
      console.log("You've not entered valid params");
    }
  };

  // Using (?? :D ??) bulma framework
  return (
    <div>
      <h5 className="page-head-title">Login</h5>
      <div className="section is-fullheight">
        <div className="container">
          <div className="column is-4 is-offset-4">
            <div className="box">
              <form onSubmit={handleSubmit}>
                <div className="field">
                  <label className="label">
                    Username
                    <div className="control">
                      <input
                        className="input"
                        type=""
                        name="username"
                        placeholder="Username"
                        autoFocus //???
                        value={state.username}
                        onChange={e => handleChange(e)}
                      />
                      {err.username && <p className="help is-danger">{err.username}</p>}
                    </div>
                  </label>
                </div>
                <div className="field">
                  <label className="label">
                    Password
                    <div className="control">
                      <input
                        className="input"
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={state.password}
                        // required
                        onChange={e => handleChange(e)}
                      />
                      {err.password && <p className="help is-danger">{err.password}</p>}
                    </div>
                  </label>
                </div>
                <button type="submit" className="button is-block is-info is-fullwidth">
                  Login
                </button>
              </form>
              <div>
                <Link to="/register">Do not have an account? Register!</Link>
                <br />
                <Link to="/forget_password">Forget Password?</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// export default login;
// =============================
