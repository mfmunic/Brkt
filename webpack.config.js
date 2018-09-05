const webpack = require('webpack');
const path = require('path');

const webpackConfig = {
  watch: process.env.NODE_ENV === 'development',
  entry: {
    index: './src/index',
    vendor: [
      'lodash',
      'react',
      'react-dom',
      'react-router-dom',
      'react-router-redux',
      'redux',
      'redux-promise-middleware'
    ]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        ACCESS_COOKIE_DOMAIN: JSON.stringify(process.env.ACCESS_COOKIE_DOMAIN)
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    })
  ],
  module: {
    rules: [
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.jsx*$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(jpe?g|gif|png|svg)$/i,
        loader: 'url-loader?limit=10000'
      }
    ]
  },
  node: {
    console: true,
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },
  resolve: {
    alias: {
      react: path.join(__dirname, 'node_modules', 'react')
    },
    extensions: [',', '.js', '.jsx']
  }
};

if (process.env.NODE_ENV === 'production') {
  webpackConfig.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      uglifyOptions: {
        compress: {
          warnings: false,
          screw_ie8: true,
          conditionals: true,
          unused: true,
          comparisons: true,
          sequences: true,
          dead_code: true,
          evaluate: true,
          if_return: true,
          join_vars: true
        },
        output: {
          comments: false
        }
      }
    }),
    new webpack.optimize.ModuleConcatenationPlugin()
  );
}

module.exports = webpackConfig;
