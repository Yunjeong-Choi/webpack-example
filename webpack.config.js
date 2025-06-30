const path = require("path");

module.exports = {
  mode: "development",
  entry: "./source/index.js",
  output: {
    // __dirname는 webpack.config.js 파일이 있는 경로
    path: path.resolve(__dirname, "public"),
    filename: "index_bundle.js",
  },
};
