import types from './types';

const actions = {
  onUserAuthentication(isLoggedIn, history) {
    if (isLoggedIn) {
      history.push('/');
      return { type: types.USER_LOGGED_IN };
    }

    localStorage.removeItem('AUTH_TOKEN');
    history.push('/');
    return { type: types.USER_LOGGED_OUT };
  },

  updateUserStatus(status) {
    if (status === null) {
      return { type: types.USER_LOGGED_OUT };
    }

    return { type: types.USER_LOGGED_IN };
  },

  getCurrentUser() {
    return function storeUserData(dispatch) {
      fetch('/auth/current-user', {
        headers: {
          authorization: localStorage.getItem('AUTH_TOKEN'),
        },
      }).then(res => res.json())
        .then(data => {
          console.log(data);
          dispatch({
            type: types.STORE_USER_DATA,
            payload: data,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    };
  },

  registerUser(name, email, password) {
    return function (dispatch) {
      fetch('/auth/sign-up', {
        method: 'POST',
        body: JSON.stringify({
          name,
          email,
          password,
        }),
        headers: new Headers({
          'Content-Type': 'application/json',
          Accept: 'application/json',
        })
      }).then(user => {
        console.log(user);
        console.log('success!');
      });
    }
  }
};

export default actions;