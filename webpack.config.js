const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');


const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './app/index.html',
  filename: 'index.html',
  inject: 'body'
});


module.exports = {
  entry: './app/index.jsx',

  output: {
    path: path.resolve('dist'),
    filename: 'index-bundle-[hash].js'
  },

  resolve: {
    extensions: ['.js', '.jsx', '.json', '.scss']
  },

  devtool: 'source-map',

  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx*$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          'eslint-loader',
        ],
      },
      {
        test: /\.jsx*$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                modules: true,
                localIdentName: '[local]',
                minimize: false
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: () => ([
                  autoprefixer
                ])
              }
            },
            'sass-loader'
          ]
        })
      },
      {
        test: /\.woff(2)?(\?[a-z0-9#=&.]+)?$/,
        loader: 'url?limit=10000&mimetype=application/font-woff'
      },
      { test: /\.(ttf|eot|svg)(\?[a-z0-9#=&.]+)?$/, loader: 'file' }
    ],
  },

  plugins: [
    HtmlWebpackPluginConfig,
    new ExtractTextPlugin('[name]-[hash].min.css')
  ]
};
