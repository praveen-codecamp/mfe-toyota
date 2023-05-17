const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const packageJson = require("../package.json");

const devConfig = {
  mode: "development",
  output: {
    publicPath: "http://localhost:3021/",
  },
  devServer: {
    port: 3021,
    historyApiFallback: {
      index: "index-dev.html", 
    },
    hot: false,
    liveReload: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "account",
      filename: "remoteEntry.js",
      exposes: {
        "./AccountApp": "./src/bootstrap",
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
