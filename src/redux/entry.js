import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './helpers/configureStore';
import rootReducer from './reducers';

import App from './components/App/';
require('../styles/common.scss');

ReactDOM.render(
  <Provider store={configureStore(rootReducer)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
