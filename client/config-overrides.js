
console.log("Config override is being applied");


const webpack = require('webpack');
const path = require('path');

module.exports = function override(config, env) {
  config.resolve.fallback = {
    path: require.resolve('path-browserify'),
    zlib: require.resolve('zlib-browserify'),
    querystring: require.resolve('querystring-es3'),
    stream: require.resolve('stream-browserify'),
    assert: require.resolve('assert'),
    buffer: require.resolve('buffer/'),
    process: require.resolve('process/browser'), 
    crypto: require.resolve('crypto-browserify'),
    http: require.resolve('stream-http'),
    https: require.resolve('https-browserify'),
    os: require.resolve('os-browserify/browser'),
    vm: require.resolve('vm-browserify'),
    fs: false, 
    net: false, 
    async_hooks: false, 
  };

  
  config.plugins.push(
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
      process: 'process/browser', 
    })
  );

  // Настройка алиасов
  config.resolve.alias = {
    ...config.resolve.alias,
    'process/browser': require.resolve('process/browser.js'), 
    'process': path.resolve(__dirname, 'src/process-shim.js'), 
  };

 
  config.module.rules.push({
    test: /\.m?js$/,
    resolve: {
      fullySpecified: false, 
    },
  });

 
  config.ignoreWarnings = [/Failed to parse source map/];

  return config;
};