var webpack = require('webpack');
module.exports = {
  entry: {
    app: './js/app.jsx',
  },
  output: {
    path: './build',
    filename: 'app.js'
  },
  resolve: {
    extensions: ['', '.js'],
  },
  module: {
    loaders: [
      { test: /\.jsx$/, loaders: ['babel','babel-loader'], exclude: /node_modules/ },
      { test: /\.js$/, loader: 'babel?stage=0', exclude: [/node_modules/] },
    ]
  },
  plugins: [
    new webpack.NoErrorsPlugin()
  ]
};
