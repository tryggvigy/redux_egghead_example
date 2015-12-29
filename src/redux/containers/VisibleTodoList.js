import { connect } from 'react-redux';


import toggleTodo from '../actions/toggleTodo';
import getVisibileTodos from '../reducers/getVisibleTodos';
import TodoList from '../components/TodoList';

const mapStateToProps = (
  state
) => {
  return {
    todos: getVisibileTodos(
      state.todos,
      state.visibilityFilter
    )
  };
};
const mapDispatchToProps = (
  dispatch
) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id));
    }
  };
};
const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default VisibleTodoList;