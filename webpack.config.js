/* jshint node: true */
var path = require('path');

module.exports = {
  context: path.join(__dirname),
  entry: './lib/index.js',

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'treasure-preview-table.js',
    library: 'TreasurePreviewTable',
    libraryTarget: 'umd',
  },

  externals: {
   'react': 'React'
  },

  module: {
    loaders: [
      { test: /\.jsx$/, loader: 'jsx-loader?harmony' }
    ]
  }
};
