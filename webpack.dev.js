var path = require('path');
let webpack = require("webpack");
const OUTPUT_PATH = path.resolve(__dirname, "public");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry:  __dirname + "/src/index.js",
  output: {
    path: __dirname + "/public",
    publicPath: '/',
    filename: "bundle.js"
  },
  devtool: "source-map",
  target: "web",
  mode: "production",
  module: {
    rules: [
      {
  	    test: /\.js$/,
  	    loader: 'babel-loader',
  	    exclude: /node_modules/
  	  },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader"
        ]
      }
    ]
  },
  devServer: {
    disableHostCheck: true,
    historyApiFallback: true,
    publicPath: "/",
    contentBase: [
      path.join(__dirname, "public"),
      path.join(__dirname, "public/css"),
      path.join(__dirname, "public/images")
    ],
    hot: true,
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    port: 4040,
    host: 'localhost'
  },
  plugins: [
  	new MiniCssExtractPlugin({
      filename: "styles.css"
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ]
};