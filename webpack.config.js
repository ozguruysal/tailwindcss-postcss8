const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "./index.js"),

  output: {
    path: path.resolve(__dirname, "./dist"),
    publicPath: "/",
    filename: "main.js",
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },

  devServer: {
    port: 3000,
    inline: true,
    writeToDisk: true,
  },
};
