import React, { PureComponent, lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core';
import { theme } from './styles';
// Components
import Loading from './components/Loading';
import PrivateRoute from "./components/PrivateRoute";
import Alert from './containers/Alert/SnackerBar';
import LoadingGlobal from "./containers/Loading/Loading";
// Redux
import { Provider } from 'react-redux';
import { store } from './store/reducers';
// Pages
const Login = lazy(() => import('./pages/Authentication/index'));
const Main = lazy(() => import('./pages/Main.jsx'));

class App extends PureComponent {
  render() {
    return (
      /** Configurations colors theme */
      <MuiThemeProvider theme={theme}>
        {/** reducers with thunck */}
        <Provider store={store}>
            <LoadingGlobal />
            <BrowserRouter>
              <Suspense fallback={<Loading />}>
                <Switch>
                  <Route path='/' exact component={() => <Redirect to={{ pathname: '/auth'}}/>} />
                  <Route path='/auth' component={Login} />
                  <PrivateRoute path='/main' component={Main}/>
                </Switch>
              </Suspense>
            </BrowserRouter>
            {/** Alert Global */}
            <Alert />
        </Provider>
      </MuiThemeProvider>
    );
  }
}

export default App;
