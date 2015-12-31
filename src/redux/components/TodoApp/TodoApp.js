import React from 'react';

import AddTodo from '../AddTodo/AddTodo';
import VisibleTodoList from '../../containers/VisibleTodoList';
import Footer from '../../components/Footer';

require('./TodoApp.scss');

const TodoApp = () => (
  <div className="TodoApp">
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

export default TodoApp;
