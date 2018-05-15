export const FORM_SUBMIT = 'FORM_SUBMIT';
export const VALID_FORM_SUBMIT = 'VALID_FORM_SUBMIT';
export const INVALID_FORM_SUBMIT = 'INVALID_FORM_SUBMIT';

export function formSubmit(formFields) {
  return {
    type: FORM_SUBMIT,
    payload: {
      formFields
    }
  };
}

export function validFormSubmit(formFields) {
  console.log(formFields);
  return {
    type: VALID_FORM_SUBMIT,
    payload: {
      formFields
    }
  };
}

export function invalidFormSubmit(status) {
  console.log(status);
  return {
    type: INVALID_FORM_SUBMIT,
    payload: {
      status
    }
  };
}
