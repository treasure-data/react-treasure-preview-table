var React = require('react');

var TableBody = require('./TableBody.jsx');

module.exports = React.createClass({
  displayName: 'TableBodyContainer',
  getDefaultProps: function () {
    return {
      columns: [],
      rows: []
    };
  },
  render: function () {
    return (
      <div className='td-preview-table-body-container'>
        <TableBody columns={this.props.columns} rows={this.props.rows}/>
      </div>
    );
  }
});
