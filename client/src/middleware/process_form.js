import { FORM_SUBMIT } from '../actions/form_actions';

const formValidation = store => next => action => {
  if (action.type === FORM_SUBMIT) {
    console.log(action.payload);
  }
  let result = next(action);

  return result;
};

const processFormMDL = [formValidation];
export default processFormMDL;
