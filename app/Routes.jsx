import React from 'react';
import { Route } from 'react-router';
import App from './components/App';
import HomePage from './home/HomePage';


export default () => (
  <App>
    OI2 ?
    <Route exact path="/" component={HomePage} />
  </App>
);
