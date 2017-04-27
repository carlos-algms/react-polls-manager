import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

import './styles.scss';

import Routes from './Routes';

const history = createBrowserHistory();

render(
  <Router history={history}>
    <Routes />
  </Router>,
  document.getElementById('root')
);
