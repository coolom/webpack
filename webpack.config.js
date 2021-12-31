const MiniCssExtractPlugin = require('mini-css-extract-plugin');

let mode = 'development';

if (process.env.NODE_ENV === 'production') mode = 'production';

module.exports = {
  mode: mode,
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          { loader: MiniCssExtractPlugin.loader, options: { publicPath: ' ' } },
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
  // output: { //not working
  //   assetModuleFilename: 'images/[hash]/[ext]/[query]',
  // },
  devtool: 'source-map',
  devServer: {
    static: './dist',
    hot: true,
  },
};
