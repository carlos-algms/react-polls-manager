import axios from 'axios';

import extractInputDataFromEvent from '../utils/extractInputDataFromEvent';

export const REQUEST_POLLS = 'REQUEST_POLLS';
export const RECEIVE_POLLS = 'RECEIVE_POLLS';
export const CREATE_POLL = 'CREATE_POLL';
export const CREATE_POLL_FAILED = 'CREATE_POLL_FAILED';
export const POLL_CREATED = 'POLL_CREATED';
export const CREATE_CHOICE = 'CREATE_CHOICE';
export const DELETE_CHOICE = 'DELETE_CHOICE';
export const INPUT_CHANGE = 'INPUT_CHANGE';
export const CHOICE_INPUT_CHANGED = 'CHOICE_INPUT_CHANGED';


const ENDPOINT = 'http://polls.apiblueprint.org/questions';

export function requestPolls() {
  return { type: REQUEST_POLLS };
}

export function receivePolls(polls) {
  return { type: RECEIVE_POLLS, polls };
}

export function createPoll() {
  return { type: CREATE_POLL };
}

export function createPollFailed(error) {
  return { type: CREATE_POLL_FAILED, error };
}

export function pollCreated(poll) {
  return { type: POLL_CREATED, poll };
}

export function createChoice() {
  return { type: CREATE_CHOICE };
}

export function deleteChoice(choiceToDelete) {
  return { type: DELETE_CHOICE, choice: choiceToDelete };
}

export function inputChanged(event) {
  const { target, value, name } = extractInputDataFromEvent(event);

  return { type: INPUT_CHANGE, target, value, name };
}

export function choiceInputChanged(event, choice) {
  const { target, value, name } = extractInputDataFromEvent(event);
  return { type: CHOICE_INPUT_CHANGED, choice, target, value, name, index: target.dataset.index };
}

export function fetchPolls() {
  return (dispatch) => {
    dispatch(requestPolls());

    return axios.get(ENDPOINT)
      .then(res => dispatch(receivePolls(res.data)))
      .catch(err => console.error(err));
  };
}

export function postNewPoll(poll) {
  return dispatch => (
    axios.post(ENDPOINT, poll)
      .then(res => dispatch(pollCreated(res.data)))
      .catch(error => dispatch(createPollFailed(error)))
  );
}
