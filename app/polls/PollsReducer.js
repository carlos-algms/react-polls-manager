import { REQUEST_POLLS, RECEIVE_POLLS, CREATE_POLL } from './PollsActions';


function pollsReducer(state = { isFetching: true, polls: [] }, action) {
  switch (action.type) {
    case REQUEST_POLLS:
      return Object.assign({}, state, {
        isFetching: true
      });

    case RECEIVE_POLLS:
      return Object.assign({}, state, {
        isFetching: false,
        polls: action.polls
      });

    case CREATE_POLL:
      return [];

    default:
      return state;
  }
}


export default pollsReducer;
