import { CHANGE_INITIAL_STATE } from './types';

export const changeInitialState = (newMessage) => {
  let message = newMessage;
  
  console.log(message);

  return function (dispatch) {
    dispatch({ 
      type: CHANGE_INITIAL_STATE, 
      payload: { message } 
    });
  }
}