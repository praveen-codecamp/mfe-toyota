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
        account: `account@http://account-nlb-ec94fa8bc469f7d7.elb.ap-south-1.amazonaws.com/remoteEntry.js`,
        auth: `auth@http://auth-nlb-4976bd09e9bf29f9.elb.ap-south-1.amazonaws.com/remoteEntry.js`,
        payment: `payment@http://payment-nlb-cc914608360d7f9f.elb.ap-south-1.amazonaws.com/remoteEntry.js`,
        preferences: `preferences@http://preference-nlb-e1dc060617337f19.elb.ap-south-1.amazonaws.com/remoteEntry.js`,
        dashboard: `dashboard@http://dashboard-nlb-ef5fed0cebdf6f63.elb.ap-south-1.amazonaws.com/remoteEntry.js`
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
