var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = {
  entry: {
    app: ['./app/index']
  },
  module: {
    loaders: [{
      test: /\.css$/,
      loader: ExtractTextPlugin.extract("style", "css")
    }, {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract('style', 'css!sass')
    }, {
      test: /\.(jpe?g|png|gif|svg)$/i,
      loaders: [
        "url-loader?limit=5000&name=../img/img-[hash:6].[ext]",
        'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}'
      ]
    }]
  },
  output: {
    filename: 'app.js',
    path: path.join(__dirname, './build')
  },
  plugins: [
    new ExtractTextPlugin("css/styles.css"),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true
    })
  ]
}

module.exports = config;
