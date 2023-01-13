const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const packageJson = require("../package.json");

const prodConfig = {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
    publicPath: "/",
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        account: `account@http://account-nlb-bc46dacd7ae6e1f1.elb.ap-south-1.amazonaws.com/remoteEntry.js`,
        auth: `auth@http://auth-nlb-469677bbd6307bc7.elb.ap-south-1.amazonaws.com/remoteEntry.js`,
        payment: `payment@http://payment-nlb-f1cca66debff337c.elb.ap-south-1.amazonaws.com/remoteEntry.js`,
        preferences: `preferences@http://preference-nlb-a1aec725c352a61d.elb.ap-south-1.amazonaws.com/remoteEntry.js`,
        dashboard: "dashboard@http://localhost:3026/remoteEntry.js",
        admin: `admin@http://localhost:3025/admin/latest/remoteEntry.js`,
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
