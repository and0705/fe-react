import React, { Suspense } from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import './App.scss';

const browserHistory = createBrowserHistory();
const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

// const DefaultLayout = React.lazy(() => import('components/DefaultLayout'));
const Login = React.lazy(() => import('components/Login'));
const ReactVersion = React.lazy(() => import('components/ReactVersion'));
const Count = React.lazy(() => import('components/Count'));
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
          {/* <Route exact path="/login" name="Login Page" component={<AuthRequired>{Login}</AuthRequired>} /> */}
          <Route exact path="/login" name="Login Page" component={Login} />
          <Route exact path="/react-version" name="React Version" component={ReactVersion} />
          <Route exact path="/count" name="Count" component={Count} />
          <Route exact path="/register" name="Register" component={Register} />
          <Route exact path="/forget_password" name="Forget Password" component={ForgetPassword} />
          <Route exact path="/change_password" name="Change Password" component={ChangePassword} />
          <Route exact path="/logged" name="Logged" component={Logged} />
          <Route exact path="/logout" name="Logout" component={Logout} />
          {/* <Route exact path="/home" name="Home" component={Home} /> */}
          {/* <Route exact path="/login" name="Register" component={Register} /> */}
          {/* <Route exact path="/404" name="Page 404" component={Page404} />
        <Route exact path="/403" name="Page 403" component={Page403} />
        <Route exact path="/500" name="Page 500" component={Page500} /> */}

          <Route exact path="/test" name="test" component={Test} />

          <Route path="/" name="Home" component={Home} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;
