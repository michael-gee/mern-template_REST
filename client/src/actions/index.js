import axios from 'axios';
import types from './types';

const actions = {
  changeInitialState(newMessage) {
    const message = newMessage;

    return function changeInitialStateFunc(dispatch) {
      dispatch({
        type: types.CHANGE_INITIAL_STATE,
        payload: { message },
      });
    };
  },

  getCurrentUser() {
    axios.get('/auth/current-user', {
      headers: {
        authorization: localStorage.getItem('AUTH_TOKEN')
      }
    })
    .then(res => {
      console.log(res);
    });
  },

  onUserAuthentication(isLoggedIn, history) {
    if(isLoggedIn) {
      history.push('/');
      return { type: types.USER_LOGGED_IN };
    } else {
      localStorage.removeItem('AUTH_TOKEN');
      history.push('/');
      return { type: types.USER_LOGGED_OUT };
    }
  },

  onLocalSignUp(email, password, history) {
    email = 'test@test.com';
    password = 'test123';
    return function (dispatch) {
      console.log(email, password, history);
      axios.post('/auth/sign-up', { email, password })
        .then(user => {
          console.log(user);
          console.log('success!');
        });
    }
  }
};

export default actions;
