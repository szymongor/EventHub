import { combineReducers } from 'redux';
import EventReducer from './reducer_event';

const rootReducer = combineReducers({
  events: EventReducer
});

export default rootReducer;
