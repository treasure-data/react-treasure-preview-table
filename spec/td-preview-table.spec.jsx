var React = require('react');
var TestUtils = React.addons.TestUtils;
var TdPreviewTable = require('../lib/td-preview-table.jsx');
var data = require('./data');

describe('TdPreviewTable', function () {
  var component;

  beforeEach(function () {
    component = TestUtils.renderIntoDocument(
      <TdPreviewTable {...data}/>
    );
  });

  it('should render', function () {
    expect(component.getDOMNode().className).toEqual('td-preview-table');
  });
});
