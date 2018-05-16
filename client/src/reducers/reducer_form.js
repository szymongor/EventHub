import { SHOW_MESSAGE, CLEAR_MESSAGE } from '../actions/form_actions';

const INITIAL_STATE = { status: null, message: null };

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SHOW_MESSAGE:
      return {
        ...state,
        status: action.payload.status,
        message: action.payload.message
      };
    case CLEAR_MESSAGE:
      return INITIAL_STATE;
    default:
      return state;
  }
}
