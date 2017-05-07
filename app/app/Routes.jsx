import React from 'react';
import { Route } from 'react-router';

import App from './';
import HomePage from '../home/HomePage';
import PollForm from '../polls/form';

export default () => (
  <App>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/polls" component={PollForm} />
  </App>
);
