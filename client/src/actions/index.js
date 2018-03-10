import types from './types';

const actions = {
  updateUserStatus(status) {
    if(status === null) {
      return { type: types.USER_LOGGED_OUT };
    } else {
      return { type: types.USER_LOGGED_IN };
    }
  },

  getCurrentUser(history) {
    return function storeUserData(dispatch) {
      fetch('/auth/current-user', {
        headers: {
          authorization: localStorage.getItem('AUTH_TOKEN')
        }
      }).then(res => {
        return res.json();
      })
      .then(data => {
        const provider = data.provider;
        dispatch({
          type: types.STORE_USER_DATA,
          payload: data[provider]
        });
      })
      .catch(err => {
        console.log(err);
      });
    }
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

  // onLocalSignUp(email, password, history) {
  //   email = 'test@test.com';
  //   password = 'test123';
  //   return function (dispatch) {
  //     console.log(email, password, history);
  //     axios.post('/auth/sign-up', { email, password })
  //       .then(user => {
  //         console.log(user);
  //         console.log('success!');
  //       });
  //   }
  // }
};

export default actions;
