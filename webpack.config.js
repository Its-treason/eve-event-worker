const path = require('path');
const nodeExternals = require('webpack-node-externals');

const env = process.env.NODE_ENV ?? 'production';
console.log(env);

module.exports = {
  entry: './src/index.ts',
  mode: env,
  target: 'node',
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js'
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  optimization: {
    minimize: true,
  },
}
