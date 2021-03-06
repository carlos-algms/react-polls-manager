import React from 'react';
import { Link } from 'react-router-dom';

import PollListContainer from '../polls/list/PollsListContainer';

export default () => (
  <div>
    <Link
      to="/polls"
      id="new-poll-button"
      className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored"
    >
      <i className="material-icons">add</i>
    </Link>

    <PollListContainer />
  </div>
);
