import { connect } from 'react-redux';
import React from 'react';

const mapStateToProps = (
  state
) => {
  return {
    name: state.metadata.name
  };
};

export function Main({
  name
}) {
  return (
    <div className="Main">
      <h1>{name}</h1>
    </div>
  );
}

export default connect(mapStateToProps)(Main);
