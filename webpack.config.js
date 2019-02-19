module.exports = {
  mode: 'development',
  entry: {
    'main': './yabai.ts'
  },
  output: {
    path: `${__dirname}/dist`,
    filename: '[name].js'
  },
  module: {
    rules: [
      { test: /\.ts$/, use: 'ts-loader' },
    ]
  },
  resolve: {
    extensions: ['.ts'],
  },
};
