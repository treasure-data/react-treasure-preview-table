var React = require('react'),
  Tooltip = require('react-bootstrap/lib/Tooltip'),
  OverlayTrigger = require('react-bootstrap/lib/OverlayTrigger');

var TreasurePreviewTable = React.createClass({
  getDefaultProps: function () {
    return {
      metadata: {},
      columns: [],
      rows: []
    };
  },
  render: function () {

    var metadata = this.props.metadata;
    var columns = this.props.columns.map(function (column, key) {
      var metadataText = metadata[column.name], metadataTooltip;

      if (metadataText && (['time', 'v'].indexOf(column.name) === -1)) {
        metadataTooltip = (
          <OverlayTrigger placement='top' overlay={<Tooltip>{metadataText}</Tooltip>}>
            <span className={'treasure-preview-table-metadata sprite16 desc16'}></span>
          </OverlayTrigger>
        );
      }

      return (
        <th key={key} className='treasure-preview-table-head-column'>
          <span className='treasure-preview-table-head-column-title'>{column.title}</span>
          <span className='treasure-preview-table-head-column-type'>{column.type}</span>
          {metadataTooltip}
        </th>
      );
    });

    var rows = this.props.rows.map(function (row, key) {
      var columns = this.props.columns.map(function (column, key) {
        var value = row[column.name];
        if (typeof value !== 'string') {
          value = JSON.stringify(value);
        }
        return <td key={key}>{value}</td>;
      });

      return <tr key={key} className='treasure-preview-table-body-row'>{columns}</tr>;
    }.bind(this));

    return (
      <div className="treasure-preview-table datapreview">
        <table className='table table-bordered table-striped resulttable querylist'>
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

module.exports = TreasurePreviewTable;
