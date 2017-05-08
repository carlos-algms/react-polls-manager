import { combineReducers } from 'redux';

import pollsList from '../polls/list/PollsListReducer';
import pollForm from '../polls/form/PollFormReducer';

export default combineReducers({
  pollsList,
  pollForm
});
