import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import initialState from './initialState';

export default combineReducers({
  initial: initialState,
  form: formReducer
});
