import { GET_POLLS, CREATE_POLL } from './PollsActions';


function pollsReducer(state = [], action) {
  switch (action.type) {
    case GET_POLLS:
      return [];

    case CREATE_POLL:
      return [];

    default:
      return state;
  }
}


export default pollsReducer;
