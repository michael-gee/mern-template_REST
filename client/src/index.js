import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import { injectGlobal } from 'styled-components';

import App from './components/App';
import reducers from './reducers';

injectGlobal`
  body {
    margin: 0;
    padding: 0;
    font-size: 62.5%;
    font-family: Arial, Helvetica, sans-serif;
  }
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }
`;

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(
  applyMiddleware(reduxThunk)
));

// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));

// registerServiceWorker();
