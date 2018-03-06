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
  },

  onSocialLogIn(provider, history) {
    return dispatch => {
      return axios.get(`/auth/${provider}`, {
        mode: 'cors',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        }
      }).then(res => {
        console.log(res);
      });
    }
  }
};

export default actions;
