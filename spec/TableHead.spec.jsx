var React = require('react');
var _ = require('lodash');
var TestUtils = React.addons.TestUtils;
var TableHead = require('../lib/TableHead.jsx');

var data = require('./data');

describe('TableHead', function () {
  var component;

  beforeEach(function () {
    component = TestUtils.renderIntoDocument(
      <TableHead row={data.row} columns={data.columns}/>
    );
  });

  it('should render', function () {
    var node = component.getDOMNode();
    expect(node.className).toEqual('td-preview-table-head');
    expect(node.querySelectorAll('th').length).toEqual(data.columns.length);
    _.forEach(node.querySelectorAll('th'), function (th, idx) {
      var title = th.querySelector('.td-preview-table-head-column-title').textContent;
      var type = th.querySelector('.td-preview-table-head-column-type').textContent;
      expect(th.className).toEqual('td-preview-table-head-column');
      expect(title).toEqual(data.columns[idx].title);
      expect(type).toEqual(data.columns[idx].type);
    });
  });
});
