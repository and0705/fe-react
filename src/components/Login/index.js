import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import Cookies from 'js-cookie';
import validateForm from 'helpers/validateForm';
import { userServices } from '../../services';
import { Redirect } from 'react-router';

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
                <Link to="/register">Register!</Link>
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
