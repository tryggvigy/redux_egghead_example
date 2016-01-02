import todo from './todo.js';
import { ADD_TODO, TOGGLE_TODO } from '../../actions/';

const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        todo(undefined, action)
      ];
    case TOGGLE_TODO:
      return state.map(t => todo(t, action));
    default:
      return state;
  }
};

export default todos;
