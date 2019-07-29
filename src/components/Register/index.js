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

  const handleChange = event => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });

    // setErrors(validateForm(state));
    validateForm(state);
  };

  const handleSubmit = event => {
    event.preventDefault();

    handleChange(event);

    console.log(validateForm(state));

    // const test = {
    //   a: '',
    //   b: '',
    // };

    // console.log(!_.isEmpty(test));

    console.log(JSON.stringify(validateForm(state)));

    if (JSON.stringify(validateForm(state)) === '{}') {
      userServices.register({
        email: state.email,
        username: state.username,
        password: state.password,
        re_pass: state.repass,
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
                        value={state.email}
                        onChange={e => handleChange(e)}
                      />
                      {validateForm(state).email && <p className="help is-danger">{validateForm(state).email}</p>}
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
                      {validateForm(state).username && <p className="help is-danger">{validateForm(state).username}</p>}
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
                      {validateForm(state).password && <p className="help is-danger">{validateForm(state).password}</p>}
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
                        name="repass"
                        // required
                        value={state.repass}
                        onChange={e => handleChange(e)}
                      />
                      {validateForm(state).repass && <p className="help is-danger">{validateForm(state).repass}</p>}
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
