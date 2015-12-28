import toggleTodo from '../../../actions/toggleTodo';
import todos from '../todos';

import expect from 'expect';
import deepFreeze from 'deep-freeze';

describe('toggleTodo action', () => {
  it('should toggle a todo with specified id', () => {
    const stateBefore = [
      {
        id: 0,
        text: 'Learn Redux',
        completed: false
      }, {
        id: 1,
        text: 'Go Shopping',
        completed: false
      }
    ];
    const stateAfter = [
      {
        id: 0,
        text: 'Learn Redux',
        completed: false
      }, {
        id: 1,
        text: 'Go Shopping',
        completed: true
      }
    ];
    // make sure our reducer is a pure function.
    deepFreeze(stateBefore);
    deepFreeze(stateAfter);
    expect(
      todos(stateBefore, toggleTodo(1))
    ).toEqual(stateAfter);
  });
});