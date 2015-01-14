var React = require('react');

var TableHead = require('./TableHead.jsx');

module.exports = React.createClass({
  displayName: 'TableHeadContainer',
  getDefaultProps: function () {
    return {
      columns: [],
      metadata: {}
    };
  },
  render: function () {
    return (
      <div className='td-preview-table-head-container'>
        <TableHead columns={this.props.columns} metadata={this.props.metadata}/>
      </div>
    );
  }
});
