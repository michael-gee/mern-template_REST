import actions from '../actions/types';

export default function (state = {}, action) {
  switch (action.type) {
    case actions.USER_LOGGED_IN:
      return { ...state, authenticated: true };
    
    case actions.USER_LOGGED_OUT:
      return { ...state, authenticated: false };

    case actions.STORE_USER_DATA:
      return { ...state, userData: action.payload };

    default: return state;
  }
}