import { combineReducers } from 'redux';

import todos from './todos/todos';
import visibilityFilter from './visibilityFilter';
/* combineReducers function from scratch! */
// const combineReducers = (reducers) => {
//   return (state =  {}, action) => {
//     return Object.keys(reducers).reduce(
//       (nextState, key) => {
//         nextState[key] = reducers[key](
//           state[key],
//           action
//         );
//         return nextState;
//       },
//       {}
//     );
//   };
// };
const todoApp = combineReducers({
  todos,
  visibilityFilter
});

export default todoApp;