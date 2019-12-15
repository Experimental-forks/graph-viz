const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src') + '/graph-viz.js',
  output: {
    filename: 'dist.js',
    path: path.resolve(__dirname, 'dist'),
  },
};