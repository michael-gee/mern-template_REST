import { CHANGE_INITIAL_STATE } from '../actions/types';

export default function(state = { message: 'Hello World!' }, action) {
  
  switch(action.type) {
    case CHANGE_INITIAL_STATE:
      return action.payload;

    default: 
      return state;
  }

}