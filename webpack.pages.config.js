const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, argv) => ({
  mode:  argv.mode === 'production' ? 'production' : 'development',
  entry: {
    home: __dirname + '/js/pages/home/index.js',
    sketch: __dirname + '/js/pages/sketch/index.js',
    guide: __dirname + '/js/pages/guide/index.js',
    elections: __dirname + '/js/pages/elections/index.js',
    base: __dirname + '/js/pages/base/index.js',
  },
  output: {
    filename: '[name]/script.js',
    path: __dirname + '/docs',
  },
  devServer: {
    compress: true,
    port: 3000,
    open: true,
    contentBase: './docs',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      LIB: path.resolve(__dirname, 'js/lib/'),
      lib: path.resolve(__dirname, 'js/lib/index.js'),
      SCSS: path.resolve(__dirname, 'scss/'),
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "es2017",
              "react",
              "stage-2",
              "stage-3",
            ],
            plugins: [
              "module-resolver",
              "transform-react-jsx",
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
      template: 'templates/home/index.html',
      filename: 'index.html',
      chunks: ['home'],
    }),
    new HtmlWebpackPlugin({
      template: 'templates/guide/index.html',
      filename: 'guide/index.html',
      chunks: ['guide'],
    }),
    new HtmlWebpackPlugin({
      template: 'templates/sketch/index.html',
      filename: 'sketch/index.html',
      chunks: ['sketch'],
    }),
    new HtmlWebpackPlugin({
      template: 'templates/elections/index.html',
      filename: 'elections/index.html',
      chunks: ['elections'],
    }),
    new HtmlWebpackPlugin({
      template: 'templates/base/index.html',
      filename: 'base/index.html',
      chunks: ['base'],
    }),
    new MiniCssExtractPlugin({
      filename: '[name]/style.css',
    }),
  ],
});
