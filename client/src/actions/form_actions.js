export const FORM_SUBMIT = 'FORM_SUBMIT';

export function formSubmit(formFields) {
  return {
    type: FORM_SUBMIT,
    payload: {
      formFields
    }
  };
}
