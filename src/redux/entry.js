import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// redux devtools middleware
import configureStore from './helpers/configureStore';

import todoApp from './reducers/todoApp';
import TodoApp from './components/TodoApp/TodoApp';


require('../styles/common.scss');

ReactDOM.render(
  <Provider store={configureStore(todoApp)}>
    <TodoApp />
  </Provider>,
  document.getElementById('root')
);
