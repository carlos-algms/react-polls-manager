import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

import Routes from './app/routes';
import store from './app/store';

import './styles.scss';

const history = createBrowserHistory();

render(
  <Provider store={store}>
    <Router history={history}>
      <Routes />
    </Router>
  </Provider>,
  document.getElementById('root')
);
