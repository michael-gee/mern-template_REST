
import { CHANGE_INITIAL_STATE } from './types';

export const changeInitialState = () => {
  let message = 'Changed State!';

  return (dispatch) => {
    dispatch({ type: CHANGE_INITIAL_STATE, payload: { message } });
  }
}