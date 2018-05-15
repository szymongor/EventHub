import {
  validFormSubmit,
  invalidFormSubmit,
  FORM_SUBMIT
} from '../actions/form_actions';

const normalizeForm = store => next => action => {
  if (action.type === FORM_SUBMIT) {
    let formFields = action.payload.formFields;
    let formData = {
      firstName: formFields.firstName,
      lastName: formFields.lastName,
      email: formFields.email,
      eventDate: formFields.startDate.unix()
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
      store.dispatch(validFormSubmit(action.payload.data));
    } else {
      store.dispatch(invalidFormSubmit(action.payload.status));
    }
  }
  let result = next(action);

  return result;
};

const processFormMDL = [normalizeForm, formValidation, actionRouter];
export default processFormMDL;
