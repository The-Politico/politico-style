const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    library: __dirname + '/js/lib/index.js',
  },
  output: {
    filename: 'main.js',
    path: __dirname + '/dist',
    libraryTarget: 'commonjs2'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  externals: {
    'react': 'commonjs react',
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
        test: /\.csv$/,
        loader: 'csv-loader',
        options: {
          dynamicTyping: true,
          header: true,
          trimHeaders: true,
          skipEmptyLines: true,
        },
      },
    ],
  },
};
