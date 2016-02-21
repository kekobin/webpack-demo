var path = require('path');
var autoprefixer = require('autoprefixer');

var config = {
  entry: {
    app: ['./app/index']
  },
  module: {
    loaders: [{
      test: /\.css$/,
      loader: 'style!css'
    }, {
      test: /\.scss$/,
      loader: 'style!css!sass'
    }]
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, './build'),
    publicPath: '/build'
  },
  postcss: [
    autoprefixer({
      browsers: ['last 2 versions']
    })
  ]
}

module.exports = config
