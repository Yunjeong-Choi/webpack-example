const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: { index: "./source/index.js", about: "./source/about.js" },
  output: {
    // __dirname는 webpack.config.js 파일이 있는 경로
    path: path.resolve(__dirname, "public"),
    filename: "[name]_bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./source/index.html",
      filename: "index.html",
      chunks: ["index"],
    }),
    new HtmlWebpackPlugin({
      template: "./source/about.html",
      filename: "about.html",
      chunks: ["about"],
    }),
  ],
};
