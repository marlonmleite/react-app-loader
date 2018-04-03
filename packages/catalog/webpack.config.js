const webpack = require('webpack')
const path = require('path')
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
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js',
    publicPath: 'http://localhost:8181/'
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
  ],
  devServer: {
    headers: { 'Access-Control-Allow-Origin': '*' },
    historyApiFallback: true,
    host: '0.0.0.0',
    port: 8181,
    disableHostCheck: true
  }
}
