import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from '../actions/';

const getVisibileTodos = (
  todos,
  filter
) => {
  switch (filter) {
    case SHOW_ALL:
      return todos;
    case SHOW_ACTIVE:
      return todos.filter(
        t => t.completed
      );
    case SHOW_COMPLETED:
      return todos.filter(
        t => !t.completed
      );
  }
};

export default getVisibileTodos;
