const path = require("path");

module.exports = {
  entry: "./src/index.ts",
  mode:'development',
  output: {
    filename: "index.js",
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'lib'),
    library: 'Downloader',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
};
