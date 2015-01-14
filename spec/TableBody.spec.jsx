var React = require('react');
var _ = require('lodash');
var TestUtils = React.addons.TestUtils;
var TableBody = require('../lib/TableBody.jsx');

var data = require('./data');

describe('TableBody', function () {
  var component;

  beforeEach(function () {
    component = TestUtils.renderIntoDocument(
      <TableBody rows={data.rows} columns={data.columns}/>
    );
  });

  it('should render', function () {
    var node = component.getDOMNode();
    expect(node.className).toEqual('td-preview-table-body');
    expect(node.querySelectorAll('tr').length).toEqual(data.rows.length);
    _.forEach(node.querySelectorAll('tr'), function (row, rowIdx) {
      expect(row.className).toEqual('td-preview-table-body-row');
      expect(row.querySelectorAll('td').length).toEqual(data.columns.length);
      _.forEach(row.querySelectorAll('td'), function (column, columnIdx) {
        var text = JSON.stringify(data.rows[rowIdx][data.columns[columnIdx].name]);
        expect(column.textContent).toEqual(text);
      });
    });
  });
});
