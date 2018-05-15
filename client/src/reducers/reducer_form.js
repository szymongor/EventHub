import {
  VALID_FORM_SUBMIT,
  INVALID_FORM_SUBMIT,
  CLEAR_STATUS
} from '../actions/form_actions';

const INITIAL_STATE = { status: null, message: null };

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case VALID_FORM_SUBMIT:
      return {
        ...state,
        status: 'SUCCESS',
        message: 'The form has been completed correctly'
      };
    case INVALID_FORM_SUBMIT:
      return {
        ...state,
        status: 'FAIL',
        message: 'Please fill all form fields'
      };
    case CLEAR_STATUS:
      return INITIAL_STATE;
    default:
      return state;
  }
}
