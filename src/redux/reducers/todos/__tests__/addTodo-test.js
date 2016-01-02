import addTodo from '../../../actions/addTodo';
import todos from '../todos';

import expect from 'expect';
import deepFreeze from 'deep-freeze';


describe('addTodo action on todos reducer', () => {
  it('should add a new todo', () => {
    const stateBefore = [];
    const stateAfter = [
      {
        id: 0,
        text: 'Learn Redux',
        completed: false
      }
    ];
    // make sure our reducer is a pure function.
    deepFreeze(stateBefore);
    deepFreeze(stateAfter);
    expect(
    todos(stateBefore, addTodo('Learn Redux'))
    ).toEqual(stateAfter);
  });
});
