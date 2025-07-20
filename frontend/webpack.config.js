const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 新增

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  devServer: {
    static: './public',
    historyApiFallback: true,
    port: 3000,
    proxy: {
      '/api': 'http://localhost:3001',
    },
    allowedHosts: 'all', // <--- 新增
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // 指定模板
    }),
  ],
}; 