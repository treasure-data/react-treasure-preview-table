var React = require('react');

var Tooltip = require('react-bootstrap/Tooltip'),
  OverlayTrigger = require('react-bootstrap/OverlayTrigger');

module.exports = React.createClass({
  displayName: 'TableHead',
  getDefaultProps: function () {
    return {
      columns: [],
      metadata: {}
    };
  },
  render: function () {
    var columns = this.props.columns.map(function (column, key) {

      var style = {
        height: 10,
        width: 10,
        display: 'block',
        backgroundColor: 'red'
      };

      var metadata = this.props.metadata[column.name],
        metadataTooltip,
        tooltip;

      if (metadata) {
        style.backgroundColor = 'yellow';

        tooltip = <Tooltip>{metadata}</Tooltip>;
        metadataTooltip = (
          <OverlayTrigger placement='bottom' overlay={tooltip}>
            <span className='td-preview-table-metadata has-metadata' style={style}></span>
          </OverlayTrigger>
        );
      } else {
        metadataTooltip = <span className='td-preview-table-metadata' style={style}></span>;
      }

      return (
        <th key={key} className='td-preview-table-head-column'>
          <span className='td-preview-table-head-column-title'>{column.title}</span>
          <span className='td-preview-table-head-column-type'>{column.type}</span>
          {metadataTooltip}
        </th>
      );
    }.bind(this));
    return (
      <table className='td-preview-table-head'>
        <thead>
          <tr>
            {columns}
          </tr>
        </thead>
      </table>
    );
  }
});
