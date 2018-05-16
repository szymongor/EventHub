import { API_POST_EVENT } from '../actions/api_actions';
import { showMessage } from '../actions/form_actions';

const actionLogger = store => next => action => {
  if (action.type === API_POST_EVENT) {
    console.log('Type: ', action.type);
    console.log(action.payload);
  }
  let result = next(action);

  return result;
};

const postRouter = store => next => action => {
  if (action.type === API_POST_EVENT) {
    let payload = action.payload;
    if (payload.status === 200) {
      store.dispatch(
        showMessage('success', 'Successfully saved an event in database')
      );
    } else {
      store.dispatch(showMessage('danger', 'Connection Error'));
    }
  }
  let result = next(action);

  return result;
};

const apiMDL = [actionLogger, postRouter];
export default apiMDL;
