import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import validateForm from 'helpers/validateForm';
import isUndf from 'helpers/isUndf';
import { userServices } from '../../services';

export default () => {
  const [state, setState] = useState({});

  const err = validateForm(state);

  const handleChange = event => {
    // set values for post to server through API
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (isUndf(err.username) && isUndf(err.email)) {
      userServices.forgetPassword({
        // token: sessionStorage.getItem('token'),
        // email: state.email,
        old_password: state.old_password,
        new_password: state.new_password,
        confirm_password: state.confirm_password,
      });
    }
  };

  // Using (?? :D ??) bulma framework
  return (
    <div>
      <h5 className="page-head-title">Forget Password</h5>
      <div className="section is-fullheight">
        <div className="container">
          <div className="column is-4 is-offset-4">
            <p>Enter your email and username then we will send verification to your email.</p>
            <div className="box">
              <form onSubmit={handleSubmit}>
                <div className="field">
                  <label className="label">
                    Username
                    <div className="control">
                      <input
                        className="input"
                        type="password"
                        name="old_password"
                        placeholder="Current password"
                        autoFocus //???
                        value={state.old_password}
                        onChange={e => handleChange(e)}
                      />
                      {err.password && <p className="help is-danger">{err.password}</p>}
                    </div>
                  </label>
                </div>

                <div className="field">
                  <label className="label">
                    Username
                    <div className="control">
                      <input
                        className="input"
                        type="password"
                        name="new_password"
                        placeholder="New password"
                        autoFocus //???
                        value={state.new_password}
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
                        placeholder="Confirm password"
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
                  Send verification email
                </button>
              </form>
              <div>
                <Link to="/login">Login</Link>
                <br />
                <Link to="/register">Do not have an account? Register!</Link>
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
