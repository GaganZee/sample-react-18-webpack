const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
module.exports = {
  mode: "development",
  entry: "./src/index.js",
  devtool: "inline-source-map",
  output: {
    path: path.join(__dirname, "/dist"),
    // filename: "bundle.js",
    filename: "[name]_[hash].bundle.js",
    assetModuleFilename: "images/[hash][ext][query]",
    sourceMapFilename: "[name]_[hash].bundle.js.map",
  },
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude:
          /[\\/]node_modules[\\/](?!(axios-retry|semver|signal-js|react-router-dom|react-router|@firebase|is-retry-allowed|qrcode|@remix-run|react-redux|idb)[\\/])/,
        use: ["babel-loader"],
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".jsx", ".tsx", ".ts", ".js"],
  },
  optimization: {
    splitChunks: { chunks: "all" },
    minimize: false,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      minify: {
        collapseWhitespace: false,
        keepClosingSlash: true,
        removeComments: false,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
      },
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
            from: "src/lib",
            to: "./lib",
        },
    ],
  }),
  ],
};
