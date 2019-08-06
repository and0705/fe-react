import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import validateForm from 'helpers/validateForm';
import Cookies from 'js-cookie';
import checkAuth from 'helpers/checkAuth';
import { userServices } from 'services';

const Login = props => {
  const [state, setState] = useState({
    username: '',
    password: '',
  });
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

    if (!err.username && !err.password) {
      // console.log(!err.username && !err.password);
      userServices
        .login({
          username: state.username,
          password: state.password,
        })
        .then(res => {
          Cookies.set('token', res.data.token, { expires: 1 / 48, path: '' });
          props.history.push('/logged');
          console.log('.then part');
        })
        .catch(res => {
          // setRep({ incorrect: res.message.replace(/400 Bad Request: /gi, '') });
          setRep({ incorrect: res.response.data.message.split(':')[1] });
          console.log(res.response.data.message, 'show res ra');
        });
    }
  };

  // Using (?? :D ??) bulma framework
  return (
    <div>
      <h5 className="page-head-title">Login</h5>
      <div className="section is-fullheight">
        <div className="container">
          <p className="is-danger">{rep.incorrect}</p>

          <div className="column is-4 is-offset-4">
            <div className="box">
              <form onSubmit={handleSubmit}>
                <div className="field">
                  <label className="label">
                    Username
                    <div className="control">
                      <input
                        className="input"
                        type="text"
                        name="username"
                        placeholder="Username"
                        autoFocus // ???
                        value={state.username}
                        onChange={e => handleChange(e)}
                      />
                      {/* {err.username ? <p className="help is-danger">{err.username}</p> : null} */}
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

export default Login;
