const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const portfinder = require('portfinder');

portfinder.basePort = 3000;

const config = (env, argv, port) => ({
  mode:  argv.mode === 'production' ? 'production' : 'development',
  entry: {
    home: path.resolve(process.cwd(), 'js/pages/home/index.js'),
    sketch: path.resolve(process.cwd(), 'js/pages/sketch/index.js'),
    guide: path.resolve(process.cwd(), 'js/pages/guide/index.js'),
    elections: path.resolve(process.cwd(), 'js/pages/elections/index.js'),
    base: path.resolve(process.cwd(), 'js/pages/base/index.js'),
  },
  output: {
    filename: '[name]/script.js',
    path: path.resolve(process.cwd(), 'docs'),
  },
  devServer: {
    compress: true,
    port: port,
    open: true,
    contentBase: './docs',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      LIB: path.resolve(process.cwd(), 'js/lib/'),
      lib: path.resolve(process.cwd(), 'js/lib/index.js'),
      SCSS: path.resolve(process.cwd(), 'scss/'),
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', {
                'targets': {
                  'browsers': 'last 2 versions',
                },
              }],
              '@babel/preset-react',
            ],
            plugins: [
              '@babel/proposal-class-properties',
            ],
          },
        },
      }, {
      test: /\.scss$/,
        use: [
          argv.mode === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
          "css-loader",
          "sass-loader",
        ],
      }, {
        test: /\.csv$/,
        loader: 'csv-loader',
        options: {
          dynamicTyping: true,
          header: true,
          trimHeaders: true,
          skipEmptyLines: true,
        },
      }, {
        test: /\.(png|svg|jpg|gif)$/,
        use: [{
          loader: 'file-loader',
          options: {
            outputPath: 'images/',
          },
        }],
      }, {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: true,
              removeComments: false,
              collapseWhitespace: false,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(process.cwd(), 'templates/home/index.html'),
      filename: 'index.html',
      chunks: ['home'],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(process.cwd(), 'templates/guide/index.html'),
      filename: 'guide/index.html',
      chunks: ['guide'],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(process.cwd(), 'templates/sketch/index.html'),
      filename: 'sketch/index.html',
      chunks: ['sketch'],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(process.cwd(), 'templates/elections/index.html'),
      filename: 'elections/index.html',
      chunks: ['elections'],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(process.cwd(), 'templates/base/index.html'),
      filename: 'base/index.html',
      chunks: ['base'],
    }),
    new MiniCssExtractPlugin({
      filename: '[name]/style.css',
    }),
  ],
});

module.exports = (env, argv) =>
  portfinder.getPortPromise()
    .then(port => config(env, argv, port));
