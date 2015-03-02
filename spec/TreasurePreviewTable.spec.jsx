var React = require('react');
var TestUtils = React.addons.TestUtils;
var TreasurePreviewTable = require('../lib/TreasurePreviewTable.jsx');
var data = require('./data');
var _ = require('lodash');

describe('TreasurePreviewTable', function () {
  var component;

  beforeEach(function () {
    component = TestUtils.renderIntoDocument(
      <TreasurePreviewTable {...data}/>
    );
  });

  it('should render', function () {
    // component
    var node = component.getDOMNode();
    expect(node.className).toEqual('treasure-preview-table datapreview');
  });

  it('should render thead', function () {
    var node = component.getDOMNode().querySelectorAll('thead')[0];
    expect(node.querySelectorAll('th').length).toEqual(data.columns.length);
    _.forEach(node.querySelectorAll('th'), function (th, idx) {
      var title = th.querySelector('.treasure-preview-table-head-column-title').textContent;
      var type = th.querySelector('.treasure-preview-table-head-column-type').textContent;
      expect(th.className).toEqual('treasure-preview-table-head-column');
      expect(title).toEqual(data.columns[idx].title);
      expect(type).toEqual(data.columns[idx].type);
    });
  });

  it('should render tbody', function () {
    var node = component.getDOMNode().querySelectorAll('tbody')[0];
    expect(node.querySelectorAll('tr').length).toEqual(data.rows.length);
    _.forEach(node.querySelectorAll('tr'), function (row, rowIdx) {
      expect(row.className).toEqual('treasure-preview-table-body-row');
      expect(row.querySelectorAll('td').length).toEqual(data.columns.length);
      _.forEach(row.querySelectorAll('td'), function (column, columnIdx) {
        var text = data.rows[rowIdx][data.columns[columnIdx].name];
        if (typeof text !== 'string') {
          text = JSON.stringify(text);
        }
        expect(column.textContent).toEqual(text);
      });
    });
  });

});
