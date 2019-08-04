import React, { Suspense } from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import './App.scss';
// import AuthRequired from 'components/AuthRequired';

import { Redirect } from 'react-router';
import checkAuth from 'helpers/checkAuth';

const browserHistory = createBrowserHistory();
const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

// const DefaultLayout = React.lazy(() => import('components/DefaultLayout'));
const Login = React.lazy(() => import('components/Login'));
const Register = React.lazy(() => import('components/Register'));
const Home = React.lazy(() => import('components/Home'));
const ForgetPassword = React.lazy(() => import('components/ForgetPassword'));
const ChangePassword = React.lazy(() => import('components/ChangePassword'));
const Logged = React.lazy(() => import('components/Logged'));
const Logout = React.lazy(() => import('components/Home'));

const Test = React.lazy(() => import('components/Test'));

// const AuthRequired = () => {
//   if (true) {
//     this.props.history.push('/aaa');
//   }
// };

const App = () => {
  return (
    <Router history={browserHistory}>
      <Suspense fallback={loading()}>
        <Switch>
          <Route exact path="/" name="Home" render={() => (!checkAuth() ? <Home /> : <Logged />)} />

          <Route exact path="/login" name="Login Page" render={() => (!checkAuth() ? <Login /> : <Logged />)} />
          <Route exact path="/register" name="Register" render={() => (!checkAuth() ? <Register /> : <Logged />)} />
          <Route
            exact
            path="/forget_password"
            name="Forget Password"
            render={() => (!checkAuth() ? <ForgetPassword /> : <Logged />)}
          />
          <Route
            exact
            path="/change_password"
            name="Change Password"
            render={() => (checkAuth() ? <ChangePassword /> : <Redirect to="/" />)}
          />
          <Route exact path="/logged" name="Logged" render={() => (checkAuth() ? <Logged /> : <Home />)} />
          <Route exact path="/logout" name="Logout" component={Logout} />
          {/* <Route exact path="/404" name="Page 404" component={Page404} />
        <Route exact path="/403" name="Page 403" component={Page403} />
        <Route exact path="/500" name="Page 500" component={Page500} /> */}
          <Route exact path="/test" name="test" component={Test} />
          <Route path="" name="Home" component={Home} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;
