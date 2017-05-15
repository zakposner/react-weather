const path = require('path');
const webpack = require('webpack'); // reveals plugins

module.exports = {
  entry: [
    'script-loader!jquery/dist/jquery.min.js',
    'script-loader!foundation-sites/dist/js/foundation.min.js',
    './app/app.jsx',
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({ // loads jquery whenever $ or jQuery are encountered
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  resolve: {
    alias: {
      Main: path.resolve(__dirname, 'app/components/Main.jsx'),
      Nav: path.resolve(__dirname, 'app/components/Nav.jsx'),
      ErrorModal: path.resolve(__dirname, 'app/components/ErrorModal.jsx'),
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
        use: 'babel-loader',
        test: /\.jsx?$/, // apply to all .js and .jsx files except node_modules
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map'
};

// FORMATTING RULES
  // Output path always gets __dirname + '/[public folder]'
  // Aliases always get path.resolve(__dirname, [path to component from root])

// Whenever you update the webpack aliases, you need to restart 'webpack -w'

// devtool - for specifying a method of generating source maps
  // source map - a way of mapping code within a compressed file back
  // to it’s original position in a source file.

  // pretty much always use this

// Loading js libraries as scripts
  // libraries are included as entry points

  // script-loader! is put at the begining of the entry point location to designate
  // that the script-loader module most package those scripts to be
  // interpreted by webpack

  // similarly, style-loader! and css-loader! are used to parse css documents into
  // webpack-compatible assets to be bundled
