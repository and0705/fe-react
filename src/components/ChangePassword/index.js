import React, { useState } from 'react';
// import Cookies from 'js-cookie';

// import { Redirect } from 'react-router';
import validateForm from 'helpers/validateForm';
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

    if (!err.old_password && !err.password && !err.confirm_password) {
      console.log('hello');
      userServices.changePassword({
        old_password: state.old_password,
        new_password: state.password,
        confirm_password: state.confirm_password,
      });
    }
  };

  // Using (?? :D ??) bulma framework
  return (
    <div>
      <h5 className="page-head-title">Change Password</h5>
      <div className="section is-fullheight">
        <div className="container">
          <div className="column is-4 is-offset-4">
            <div className="box">
              <form onSubmit={handleSubmit}>
                <div className="field">
                  <label className="label">
                    Current password
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
                      {err.old_password && <p className="help is-danger">{err.old_password}</p>}
                    </div>
                  </label>
                </div>

                <div className="field">
                  <label className="label">
                    Enter new password
                    <div className="control">
                      <input
                        className="input"
                        type="password"
                        name="password"
                        placeholder="New password"
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
                  Change password
                </button>
              </form>
              {/* <div>
                <Link to="/login">Login</Link>
                <br />
                <Link to="/register">Do not have an account? Register!</Link>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// export default login;
// =============================
