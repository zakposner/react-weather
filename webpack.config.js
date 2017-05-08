const path = require('path');

module.exports = {
  entry: './app/app.jsx',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  resolve: {
    alias: { // allows you to require modules directly by alias
      Main: path.resolve(__dirname, 'app/components/Main.jsx'),
      Nav: path.resolve(__dirname, 'app/components/Nav.jsx'),
      Weather: path.resolve(__dirname, 'app/components/Weather.jsx'),
      About: path.resolve(__dirname, 'app/components/About.jsx'),
      Examples: path.resolve(__dirname, 'app/components/Examples.jsx'),
      WeatherForm: path.resolve(__dirname, 'app/components/WeatherForm.jsx'),
      WeatherMessage: path.resolve(__dirname, 'app/components/WeatherMessage.jsx'),
      openWeatherMap: path.resolve(__dirname, 'app/api/openWeatherMap.jsx')
    },
    extensions: [".js", ".jsx"] // file extensions we want to work with
  },
  module: {
    rules: [
      {
        use: 'babel-loader', //loader name
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map'
};

// FORMATTING RULES
  // Output path always gets __dirname + '/[public folder]'
  // Aliases always get path.resolve(__dirname, [path to component from root])
  //

// Whenever you update the webpack aliases, you need to restart 'webpack -w'

// devtool - for specifying a method of generating source maps
  // source map - a way of mapping code within a compressed file back
  // to it’s original position in a source file.

  // pretty much always use this
