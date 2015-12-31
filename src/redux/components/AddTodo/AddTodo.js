import React from 'react';
import { connect } from 'react-redux';

import addTodo from '../../actions/addTodo';

require('./AddTodo.scss');

let AddTodo = ({ dispatch }) => {
  let input;
  return (
    <div className="AddTodo">
      <input
        ref={node => {
          input = node;
        }}
      />
    <button
      className="AddTodo__btn"
      onClick={() => {
        dispatch(addTodo(input.value));
        input.value = '';
      }}
    >
        Add Todo
      </button>
    </div>
  );
};
AddTodo = connect()(AddTodo);

export default AddTodo;
