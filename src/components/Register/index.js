import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import validateForm from 'helpers/validateForm';
import { userServices } from '../../services';

export default () => {
  const [state, setState] = useState({
    // email: '',
    // username: '',
    // password: '',
    // confirm_password: '',
  });

  // const [errors, setErrors] = useState({
  // email: '',
  // username: '',
  // password: '',
  // confirm_password: '',
  // });

  const err = validateForm(state);

  const handleChange = event => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });

    // setErrors(err);
    // err;
  };

  const handleSubmit = event => {
    event.preventDefault();

    // handleChange(event);

    console.log(err);

    // const test = {
    //   a: '',
    //   b: '',
    // };

    // console.log(!_.isEmpty(test));

    console.log(JSON.stringify(err));

    if (!err.email && !err.username && !err.password && !err.confirm_password) {
      userServices.register({
        email: state.email,
        username: state.username,
        password: state.password,
        confirm_password: state.confirm_password,
      });
    }
  };

  return (
    <div>
      <h5 className="page-head-title">Register</h5>
      <div className="section is-fullheight">
        <div className="container">
          <div className="column is-4 is-offset-4">
            <div className="box">
              <form onSubmit={handleSubmit}>
                <div className="field">
                  <label className="label">
                    Email
                    <div className="control">
                      <input
                        className="input"
                        // type="email"
                        name="email"
                        placeholder="Email"
                        autoComplete="off"
                        autoFocus
                        value={state.email}
                        onChange={e => handleChange(e)}
                      />
                      {err.email && <p className="help is-danger">{err.email}</p>}
                    </div>
                  </label>
                </div>

                <div className="field">
                  <label className="label">
                    Username
                    <div className="control">
                      <input
                        className="input"
                        type="text"
                        placeholder="Username"
                        name="username"
                        // required
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
                        // required
                        value={state.password}
                        onChange={e => handleChange(e)}
                      />
                      {err.password && <p className="help is-danger">{err.password}</p>}
                    </div>
                  </label>
                </div>

                <div className="field">
                  <label className="label">
                    Re-enter password
                    <div className="control">
                      <input
                        className="input"
                        type="password"
                        placeholder="Re-enter Password"
                        name="confirm_password"
                        // required
                        value={state.confirm_password}
                        onChange={e => handleChange(e)}
                      />
                      {err.confirm_password && <p className="help is-danger">{err.confirm_password}</p>}
                    </div>
                  </label>
                </div>

                <button type="submit" className="button is-block is-info is-fullwidth">
                  Register
                </button>
              </form>

              <div>
                <Link to="/login">Have an account? Login!</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
