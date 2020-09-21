module.exports = {
  mode:"development",
  plugins: [
    new HTMLWebpackPlugin()
  ],
  /*...*/
  // entry: './src/index.js',
  /*...*/
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  /*...*/
  module: {
    rules: [
      { test: /\.css$/, use: 'css-loader' },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
}