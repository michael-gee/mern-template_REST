import { combineReducers } from 'redux';
import initialReducer from './initialReducer';
import authReducer from './authReducer';

export default combineReducers({
  initial: initialReducer,
  auth: authReducer
});
