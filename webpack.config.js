const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  devServer: {
    port: 3000,
    open: true
  },
  ignoreWarnings: [
    {
      module: /node_modules/
    }
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      Components: path.resolve(__dirname, 'src/components/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
};
