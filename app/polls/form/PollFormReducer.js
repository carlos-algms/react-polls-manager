import {
  CREATE_POLL,
  CREATE_CHOICE,
  DELETE_CHOICE,
  INPUT_CHANGE,
  CHOICE_INPUT_CHANGED,
  POLL_CREATED,
  CREATE_POLL_FAILED
} from '../PollsActions';
import Choicesmanager from '../ChoicesManager';

let choicesManager;

function PollFormReducer(state = {
  question: '',
  choices: [],
  isCreated: false,
  hasErrors: false
}, action) {
  switch (action.type) {
    case CREATE_POLL:
      choicesManager = new Choicesmanager();
      return Object.assign({}, state, {
        question: '',
        choices: [choicesManager.createNewChoice()]
      });

    case CREATE_CHOICE:
      return Object.assign({}, state, {
        choices: [...state.choices, choicesManager.createNewChoice()]
      });

    case DELETE_CHOICE:
      return Object.assign({}, state, {
        choices: choicesManager.deleteChoice(state.choices, action.choice)
      });

    case INPUT_CHANGE:
      return Object.assign({}, state, {
        [action.name]: action.value
      });

    case CHOICE_INPUT_CHANGED:
      return choiceInputChanged(Object.assign({}, state), action);

    case POLL_CREATED:
      return Object.assign({}, state, {
        isCreated: true,
        hasErrors: false,
      });

    case CREATE_POLL_FAILED:
      return Object.assign({}, state, {
        isCreated: false,
        hasErrors: true,
      });

    default:
      return state;
  }
}

function choiceInputChanged(newState, action) {
  newState.choices[action.index].value = action.value;
  return newState;
}


export default PollFormReducer;
