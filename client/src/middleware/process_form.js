import { showMessage, FORM_SUBMIT } from '../actions/form_actions';

import { postCategory } from '../actions/api_actions';

const normalizeForm = store => next => action => {
  if (action.type === FORM_SUBMIT) {
    let formFields = action.payload.formFields;
    let formData = {
      firstName: formFields.firstName,
      lastName: formFields.lastName,
      email: formFields.email,
      eventDate: formFields.startDate.format()
    };
    action.payload.data = formData;
  }
  let result = next(action);

  return result;
};

const formValidation = store => next => action => {
  if (action.type === FORM_SUBMIT) {
    let status = { validForm: true };
    let formFields = action.payload.data;
    for (let field in formFields) {
      if (formFields[field] === undefined || formFields[field] === '') {
        status.validForm = false;
      }
    }
    action.payload.status = status;
  }
  let result = next(action);

  return result;
};

const actionRouter = store => next => action => {
  if (action.type === FORM_SUBMIT) {
    if (action.payload.status.validForm) {
      store.dispatch(
        showMessage('success', 'The form has been completed correctly')
      );
      store.dispatch(postCategory(action.payload.data));
    } else {
      store.dispatch(showMessage('danger', 'Please fill all form fields'));
    }
  }
  let result = next(action);

  return result;
};

const processFormMDL = [normalizeForm, formValidation, actionRouter];
export default processFormMDL;
