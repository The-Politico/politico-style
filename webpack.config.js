const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    home: __dirname + '/js/pages/home/index.js',
    sketch: __dirname + '/js/pages/sketch/index.js',
    guide: __dirname + '/js/pages/guide/index.js',
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/dist/js'
  },
  devServer: {
    contentBase: './dist',
    compress: true,
    port: 3000,
    open: true,
    contentBase: './templates'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      LIB: path.resolve(__dirname, 'js/lib/components/'),
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
              "stage-3"
            ],
            plugins: [
              "module-resolver",
              "transform-react-jsx"
            ]
          }
        }
      }, {
      test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      }, {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      }, {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: true,
              removeComments: false,
              collapseWhitespace: false
            }
          }
        ]
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'templates/home/index.html',
      filename: 'index.html',
      chunks: ['home']
    }),
    new HtmlWebpackPlugin({
      template: 'templates/guide/index.html',
      filename: 'guide/index.html',
      chunks: ['guide']
    }),
    new HtmlWebpackPlugin({
      template: 'templates/sketch/index.html',
      filename: 'sketch/index.html',
      chunks: ['sketch']
    }),
  ],
}
