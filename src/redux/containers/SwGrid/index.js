import { connect } from 'react-redux';
import DataGrid from '../../components/DataGrid/';
import loadData from '../../actions/loadData';

const mapStateToProps = (
  state
) => {
  return {
    data: state.swData
  };
};
const mapDispatchToProps = (
  dispatch
) => {
  return {
    getData: () => {
      dispatch(loadData());
    }
  };
};
const SwGrid = connect(
  mapStateToProps,
  mapDispatchToProps
)(DataGrid);

export default SwGrid;
