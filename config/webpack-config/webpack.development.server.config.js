const nodeExternals = require('webpack-node-externals')
const baseConfig = require('./webpack.base.development.config')('development')

module.exports = {
  devtool: 'source-map',
  entry: [baseConfig.resolvePath('../../src/server/server.tsx')],
  externals: [nodeExternals()],
  mode: 'development',
  module: baseConfig.module,
  output: {
    path: baseConfig.resolvePath('../../dist'),
    filename: 'server.js',
    libraryTarget: 'commonjs2',
  },
  plugins: baseConfig.plugins,
  resolve: baseConfig.resolve,
  target: 'node',
}
