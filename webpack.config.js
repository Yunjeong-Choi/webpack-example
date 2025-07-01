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
  module: {
    rules: [
      {
        // 어떤 파일에 이 규칙을 적용할지
        test: /\.css$/i,
        use: [
          /* css-loader
           * CSS 파일을 JS 모듈로 변환
           * 즉, JS에서 import할 수 있게 만듦
           * style-loader
           * 변환된 JS 모듈(CSS)을 <style> 태그로 웹페이지에 주입
           */
          "style-loader",
          "css-loader",
          /* 이 둘의 순서가 달라지면 에러가 발생함
          실제 적용 순서는 아래서 위이기 때문
          : css-loader → style-loader
          */
        ],
      },
    ],
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
