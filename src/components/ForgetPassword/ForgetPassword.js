import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import validateForm from 'helpers/validateForm';
import checkAuth from 'helpers/checkAuth';
import { userServices } from 'services';
import toaster from 'toasted-notes';
import 'toasted-notes/src/styles.css';

const ForgetPassword = props => {
  const [state, setState] = useState({});
  const [err, setErr] = useState({});

  const [rep, setRep] = useState({
    incorrect: '',
  });

  if (checkAuth()) return <Redirect to="/logged" />;

  const handleChange = event => {
    // set values for post to server through API
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

    if (!err.username && !err.email) {
      userServices
        .forgetPassword({
          username: state.username,
          email: state.email,
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

  // Using (?? :D ??) bulma framework
  return (
    <div>
      <h5 className="page-head-title">Forget Password</h5>
      <div className="section is-fullheight">
        <div className="container">
          <div className="column is-4 is-offset-4">
            <p>{rep.incorrect}</p>

            <div className="box">
              <form onSubmit={handleSubmit}>
                <div className="field">
                  {/* eslint-disable-next-line */}
                  <label className="label">
                    Username
                    <div className="control">
                      <input
                        className="input"
                        type=""
                        name="username"
                        placeholder="Username"
                        //  eslint-disable-next-line
                        autoFocus // ???
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
                    Email
                    <div className="control">
                      <input
                        className="input"
                        // type="email"
                        placeholder="Email"
                        name="email"
                        value={state.email}
                        // required
                        onChange={e => handleChange(e)}
                      />
                      {err.email && <p className="help is-danger">{err.email}</p>}
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
                <Link to="/register">Register!</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
