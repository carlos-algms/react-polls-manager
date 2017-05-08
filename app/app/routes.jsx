import React from 'react';
import { Route } from 'react-router';

import App from './';
import HomePage from '../home/HomePage';
import PollFormContainer from '../polls/form/PollFormContainer';

export default () => (
  <App>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/polls" component={PollFormContainer} />
  </App>
);
