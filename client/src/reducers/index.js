import { combineReducers } from 'redux';
import EventReducer from './reducer_event';
import FormStatusReducer from './reducer_form';

const rootReducer = combineReducers({
  events: EventReducer,
  formStatus: FormStatusReducer
});

export default rootReducer;
