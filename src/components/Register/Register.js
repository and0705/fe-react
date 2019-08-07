import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import toaster from 'toasted-notes';
import 'toasted-notes/src/styles.css';
import validateForm from 'helpers/validateForm';
import { userServices } from 'services';
import checkAuth from 'helpers/checkAuth';

const Register = props => {
  const [state, setState] = useState({
    email: '',
    username: '',
    password: '',
    confirm_password: '',
  });
  const [err, setErr] = useState({});
  const [rep, setRep] = useState({
    incorrect: '',
  });

  if (checkAuth()) return <Redirect to="/logged" />;

  const handleChange = event => {
    setRep({ incorrect: '' });

    const newState = {
      ...state,
      [event.target.name]: event.target.value,
    };
    setState(newState);
    setErr(validateForm(newState));
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (!err.email && !err.username && !err.password && !err.confirm_password) {
      userServices
        .register({
          email: state.email,
          username: state.username,
          password: state.password,
          confirm_password: state.confirm_password,
        })
        .then(res => {
          toaster.notify(res.data.successful, {
            duration: 5000,
          });
          // eslint-disable-next-line
          props.history.push('/');
        })
        .catch(res => {
          setRep({ incorrect: res.response.data.message.split(':')[1] });
        });
    }
  };

  return (
    <div>
      <h5 className="page-head-title">Register</h5>
      <div className="section is-fullheight">
        <div className="container">
          <p className="is-danger">{rep.incorrect}</p>

          <div className="column is-4 is-offset-4">
            <div className="box">
              <form onSubmit={handleSubmit}>
                <div className="field">
                  {/* eslint-disable-next-line */}
                  <label className="label">
                    Email
                    <div className="control">
                      <input
                        className="input"
                        name="email"
                        placeholder="Email"
                        autoComplete="off"
                        // eslint-disable-next-line
                        autoFocus
                        value={state.email}
                        onChange={e => handleChange(e)}
                      />
                      {err.email && <p className="help is-danger">{err.email}</p>}
                    </div>
                  </label>
                </div>

                <div className="field">
                  {/* eslint-disable-next-line */}
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
                  {/* eslint-disable-next-line */}
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
                  {/* eslint-disable-next-line */}
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
                <Link to="/login">Login!</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
