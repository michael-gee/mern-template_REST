import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import './styles/index.css';

import Routes from './routes';
import reducers from './reducers';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>, document.getElementById('root'));

// registerServiceWorker();
