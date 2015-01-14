var React = require('react');

module.exports = React.createClass({
  displayName: 'TableBody',
  getDefaultProps: function () {
    return {
      columns: [],
      rows: []
    };
  },
  render: function () {
    var rows = this.props.rows.map(function (row, key) {
      var columns = this.props.columns.map(function (column, key) {
        var value = JSON.stringify(row[column.name]);
        return <td key={key}>{value}</td>;
      });
      return <tr key={key} className='td-preview-table-body-row'>{columns}</tr>;
    }.bind(this));

    return (
      <table className='td-preview-table-body'>
        <tbody>
          {rows}
        </tbody>
      </table>
    );
  }
});
