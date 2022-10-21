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
  staticDirs: ["./public"],
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

    config.resolve.fallback = {
      ...config.resolve.fallback,
      timers: require.resolve("timers-browserify"),
      child_process: false,
      fs: false,
    }
    config.resolve.alias = {
      ...config.resolve.alias,
      blitz: path.resolve(__dirname, "./mocks"),
      app: path.resolve(__dirname, "../app"),
      db: path.resolve(__dirname, "../db"),
    }

    return config
  },
  // typescript: { reactDocgen: "react-docgen" },
}
