const webpack = require('webpack')
const path = require('path')

const paths = {
  DIST: path.resolve(__dirname, 'dist'),
  NODE_MODULES: path.resolve(__dirname, 'node_modules'),
  SRC: path.resolve(__dirname, 'src')
}

module.exports = {

  entry: path.join(paths.SRC, 'index.js'),

  output: {
    path: paths.DIST,
    filename: 'bundle.js'
  },

  plugins: [
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery'
    })
  ],

  node: {
    console: true,
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },

  resolve: {
    modules: ['node_modules', './src'],
    extensions: ['.js', '.jsx']
  },

  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        loader: 'standard-loader',
        exclude: /(node_modules|bower_components)/,
        options: {
          parser: 'babel-eslint'
        }
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          //'eslint-loader',
          'babel-loader'
        ]
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        }, {
          loader: 'postcss-loader',
          options: {
            plugins: function () {
              return [
                require('autoprefixer')
              ]
            }
          }
        }, {
          loader: 'sass-loader'
        }]
      }
    ]
  }
}
