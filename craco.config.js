module.exports = {
    webpack: {
      configure: (webpackConfig) => {
        webpackConfig.resolve.fallback = {
          os: require.resolve('os-browserify/browser')
        };
        return webpackConfig;
      }
    }
  };
  