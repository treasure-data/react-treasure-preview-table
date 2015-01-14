# react td preview table

Get the AMD module located at `react-td-preview-table.js` and include it in your project.

Here is a sample integration:

```js
require.config({
  paths: {
    'react': 'vendor/bower_components/react/react',
    'TdPreviewTable': 'react-td-preview-table'
  }
});

require(['react', 'ReactTdPreviewTable'], function(React, ReactTdPreviewTable) {

  React.render(React.createElement(ReactTdPreviewTable), document.getElementById('widget-container'));

});
```

## Development

* Development server `npm run dev`.
* Continuously run tests on file changes `npm run watch-test`;
* Run tests: `npm test`;
* Build `npm run build`;
