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
        account: `account@http://account-nlb-a5776d8e7193e62e.elb.ap-south-1.amazonaws.com/remoteEntry.js`,
        auth: `auth@http://auth-nlb-7ffa94926ae2aa47.elb.ap-south-1.amazonaws.com/remoteEntry.js`,
        payment: `payment@http://payment-nlb-44d05710ce8177ad.elb.ap-south-1.amazonaws.com/remoteEntry.js`,
        preferences: `preferences@http://preference-nlb-a5ef5aa71dddcb2f.elb.ap-south-1.amazonaws.com/remoteEntry.js`,
        dashboard: `dashboard@http://dashboard-nlb-c15fa8773c0ac683.elb.ap-south-1.amazonaws.com/remoteEntry.js`,
        admin: `admin@http://localhost:3025/admin/latest/remoteEntry.js`,
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
