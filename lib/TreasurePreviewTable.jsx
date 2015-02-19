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
      var metadataTooltip;

      // Skip time and v columns
      if (['time', 'v'].indexOf(column.name) === -1) {
        var metadataClasses = 'treasure-preview-table-metadata sprite16 ',
          metadataText = metadata[column.name];

        if (metadataText) {
          metadataTooltip = (
            <OverlayTrigger placement='top' overlay={<Tooltip>{metadataText}</Tooltip>}>
              <span className={metadataClasses + 'desc16'}></span>
            </OverlayTrigger>
          );
        } else {
          metadataTooltip = <span className={metadataClasses + 'nodesc16'}></span>;
        }
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
        var value = JSON.stringify(row[column.name]);
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
