import { connect } from 'react-redux';

import Header from '../components/Header/';

const mapStateToProps = (
  state
) => {
  return {
    name: state.metadata.name
  };
};

export default connect(mapStateToProps)(Header);
