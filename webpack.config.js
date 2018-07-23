const path = require('path');

module.exports = {
  mode: 'production',
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    filename: 'jquery.simple-scroll-follow.min.js',
    path: path.join(__dirname, 'dist')
  }
};