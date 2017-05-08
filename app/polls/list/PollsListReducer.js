import { REQUEST_POLLS, RECEIVE_POLLS } from '../PollsActions';


function PollsListReducer(state = { isFetching: true, polls: [] }, action) {
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

    default:
      return state;
  }
}


export default PollsListReducer;
