var React = require('react');

var TableHeadContainer = require('./TableHeadContainer.jsx'),
  TableBodyContainer = require('./TableBodyContainer.jsx');

module.exports = React.createClass({
  displayName: 'TdPreviewTable',
  getDefaultProps: function () {
    return {
      metadata: {},
      columns: [],
      rows: []
    };
  },
  render: function () {
    return (
      <div className="td-preview-table">
        <TableHeadContainer columns={this.props.columns} metadata={this.props.metadata}/>
        <TableBodyContainer columns={this.props.columns} rows={this.props.rows}/>
      </div>
    );
  }
});
