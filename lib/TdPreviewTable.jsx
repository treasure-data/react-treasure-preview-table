var React = require('react');

// var TableHead = require('./TableHead.jsx'),
//   TableBody = require('./TableBody.jsx');

var Tooltip = require('react-bootstrap/Tooltip'),
  OverlayTrigger = require('react-bootstrap/OverlayTrigger');

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

    var columns = this.props.columns.map(function (column, key) {
      var metadata = this.props.metadata[column.name],
        metadataTooltip,
        tooltip;

      if (metadata) {
        tooltip = <Tooltip>{metadata}</Tooltip>;
        metadataTooltip = (
          <OverlayTrigger placement='bottom' overlay={tooltip}>
            <span className='td-preview-table-metadata has-metadata'></span>
          </OverlayTrigger>
        );
      } else {
        metadataTooltip = <span className='td-preview-table-metadata'></span>;
      }

      return (
        <th key={key} className='td-preview-table-head-column'>
          <span className='td-preview-table-head-column-title'>{column.title}</span>
          <span className='td-preview-table-head-column-type'>{column.type}</span>
          {metadataTooltip}
        </th>
      );
    }.bind(this));

    var rows = this.props.rows.map(function (row, key) {
      var columns = this.props.columns.map(function (column, key) {
        var value = JSON.stringify(row[column.name]);
        return <td key={key}>{value}</td>;
      });
      return <tr key={key} className='td-preview-table-body-row'>{columns}</tr>;
    }.bind(this));

    return (
      <div className="td-preview-table">
        <table>
          <thead>
            <tr>
              {columns}
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </table>
      </div>
    );
  }
});
