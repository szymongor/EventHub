export const FORM_SUBMIT = 'FORM_SUBMIT';
export const VALID_FORM_SUBMIT = 'VALID_FORM_SUBMIT';
export const INVALID_FORM_SUBMIT = 'INVALID_FORM_SUBMIT';
export const SHOW_MESSAGE = 'SHOW_MESSAGE';
export const CLEAR_MESSAGE = 'CLEAR_MESSAGE';

export function formSubmit(formFields) {
  return {
    type: FORM_SUBMIT,
    payload: {
      formFields
    }
  };
}

export function showMessage(status, message) {
  return {
    type: SHOW_MESSAGE,
    payload: {
      status,
      message
    }
  };
}

export function clearMessage() {
  return {
    type: CLEAR_MESSAGE
  };
}
