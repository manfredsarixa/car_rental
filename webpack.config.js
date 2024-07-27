const path = require('path');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

module.exports = {
  entry: './src/index.js', // Adjust the entry point to your main file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), // Adjust the output directory if needed
  },
  resolve: {
    alias: {
      'node:buffer': 'buffer',
    },
    fallback: {
      'buffer': require.resolve('buffer/'),
    },
  },
  plugins: [
    new NodePolyfillPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      // Add other loaders as needed
    ],
  },
};
