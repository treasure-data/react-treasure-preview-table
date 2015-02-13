var React = require('react');
var TestUtils = React.addons.TestUtils;
var TdPreviewTable = require('../lib/TdPreviewTable.jsx');
var data = require('./data');
var _ = require('lodash');

describe('TdPreviewTable', function () {
  var component;

  beforeEach(function () {
    component = TestUtils.renderIntoDocument(
      <TdPreviewTable {...data}/>
    );
  });

  it('should render', function () {
    // component
    var node = component.getDOMNode();
    expect(node.className).toEqual('td-preview-table datapreview');
  });

  it('should render thead', function () {
    var node = component.getDOMNode().querySelectorAll('thead')[0];
    expect(node.querySelectorAll('th').length).toEqual(data.columns.length);
    _.forEach(node.querySelectorAll('th'), function (th, idx) {
      var title = th.querySelector('.td-preview-table-head-column-title').textContent;
      var type = th.querySelector('.td-preview-table-head-column-type').textContent;
      expect(th.className).toEqual('td-preview-table-head-column');
      expect(title).toEqual(data.columns[idx].title);
      expect(type).toEqual(data.columns[idx].type);
    });
  });

  it('should render tbody', function () {
    var node = component.getDOMNode().querySelectorAll('tbody')[0];
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
