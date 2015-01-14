var React = require('react');
var TestUtils = React.addons.TestUtils;
var TableHeadContainer = require('../lib/TableHeadContainer.jsx');

var data = require('./data');

describe('TableHeadContainer', function () {
  var component;

  beforeEach(function () {
    component = TestUtils.renderIntoDocument(
      <TableHeadContainer metadata={data.metadata} columns={data.columns}/>
    );
  });

  it('should render', function () {
    expect(component.getDOMNode().className).toEqual('td-preview-table-head-container');
  });
});
