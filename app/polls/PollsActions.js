import axios from 'axios';

export const REQUEST_POLLS = 'REQUEST_POLLS';
export const RECEIVE_POLLS = 'RECEIVE_POLLS';
export const CREATE_POLL = 'CREATE_POLL';

const ENDPOINT = 'http://polls.apiblueprint.org/questions';

export function requestPolls() {
  return { type: REQUEST_POLLS };
}

export function receivePolls(polls) {
  return { type: RECEIVE_POLLS, polls };
}

export function createPoll(poll) {
  return { type: CREATE_POLL, poll };
}


export function fetchPolls() {
  return (dispatch) => {
    dispatch(requestPolls());

    return axios.get(ENDPOINT)
      .then(res => dispatch(receivePolls(res.data)))
      .catch(err => console.error(err));
  };
}
