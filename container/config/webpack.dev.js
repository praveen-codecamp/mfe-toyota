const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const packageJson = require("../package.json");

const devConfig = {
  mode: "development",
  output: {
    publicPath: "http://localhost:3020/",
  },
  devServer: {
    port: 3020,
    hot: false,
    liveReload: true,
    historyApiFallback: {
      index: "index-dev.html",
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        account: "account@http://localhost:3021/remoteEntry.js",
        auth: "auth@http://localhost:3022/remoteEntry.js",
        payment: "payment@http://localhost:3023/remoteEntry.js",
        preferences: "preferences@http://localhost:3024/remoteEntry.js",
        admin: "admin@http://localhost:3025/remoteEntry.js",
        dashboard: "dashboard@http://localhost:3026/remoteEntry.js",
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
