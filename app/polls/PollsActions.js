
export const GET_POLLS = 'GET_POLLS';
export const CREATE_POLL = 'CREATE_POLL';


export function getPolls() {
  return { type: GET_POLLS };
}


export function createPoll(poll) {
  return { type: CREATE_POLL, poll };
}

