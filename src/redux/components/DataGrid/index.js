import React, { Component } from 'react';
require('./DataGrid.scss');

class DataGrid extends Component {

  componentDidMount() {
    this.props.getData();
  }

  render() {
    const { data } = this.props;
    return (
      <div className="DataGrid">
        <div className="DataGrid__holder">
          {data.results.map((characer, index) => {
            return (
              <div className="item" key={index}>
                <div className="item__inner">
                  {characer.name}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
DataGrid.propTypes = {
  data: React.PropTypes.object,
  getData: React.PropTypes.func,
  onClick: React.PropTypes.func,
};

export default DataGrid;
