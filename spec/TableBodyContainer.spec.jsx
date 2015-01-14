var React = require('react');
var TestUtils = React.addons.TestUtils;
var TableBodyContainer = require('../lib/TableBodyContainer.jsx');

var data = require('./data');

describe('TableBodyContainer', function () {
  var component;

  beforeEach(function () {
    component = TestUtils.renderIntoDocument(
      <TableBodyContainer rows={data.rows} columns={data.columns}/>
    );
  });

  it('should render', function () {
    expect(component.getDOMNode().className).toEqual('td-preview-table-body-container');
  });
});
