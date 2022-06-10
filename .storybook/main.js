// const excluded = [
//   /[\\/]npm-which[\\/]/,
//   /[\\/]cross-spawn[\\/]/,
//   /@blitzjs[\\/]config/,
//   /blitz[\\/]packages[\\/]config/,
//   /blitz2[\\/]packages[\\/]config/,
// ]

const path = require("path")

module.exports = {
  stories: ["../app/**/*.stories.mdx", "../app/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
  webpackFinal: async (config) => {
    // config.module.rules.push({
    //   issuer: /(mutations|queries)(?!.*\.client)/,
    //   resource: /_resolvers/,
    //   use: { loader: "null-loader" },
    // })

    // excluded.forEach((excluded) => {
    //   config.module.rules.push({ test: excluded, use: { loader: "null-loader" } })
    // })

    config.resolve.alias = {
      ...config.resolve.alias,
      "app/components/core": path.resolve(__dirname, "../app/components/core"),
    }

    return config
  },
  // typescript: { reactDocgen: "react-docgen" },
}
