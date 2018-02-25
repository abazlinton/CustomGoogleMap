const config = {
  entry: __dirname + "/client/src/app.ts",
  output: {
    filename: "bundle.js",
    path: __dirname + "/client/build/js"
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.ts']
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
      // {
      //   test: /\.js?$/,
      //   exclude: /(node_modules)/,
      //   loader: 'babel-loader',
      //   query: {
      //     presets: ['env']
      //   }
      // },
      {
        enforce: 'pre',
        test: /\.js$/, loader: "source-map-loader"
      }
    ]
  }
};

module.exports = config;
