import { combineReducers } from 'redux';
import fetchDataReducer from './fetch/fetch.reducer';

const rootReducer = combineReducers({
  fetch: fetchDataReducer
});

export default rootReducer;
