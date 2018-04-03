const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    app: [
      'regenerator-runtime/runtime',
      './src/index.jsx'
    ]
  },
  devtool: 'source-map',
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: '[name].[hash].js'
  },
  resolve: {
    extensions: ['.jsx', '.js']
  },
  module: {
    rules: [
      { test: /\.(png|svg|woff|woff2|ttf|eot)/, loader: 'file-loader' },
      { test: /\.js(x)?$/, loader: 'babel-loader', exclude: /node_modules/ },
      {
        test: /\.(css|scss)$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          {
            loader: 'sass-loader'
          }]
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.ejs'
    })
  ]
}
