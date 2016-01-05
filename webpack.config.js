var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: ['./src/redux/entry.js'],
    devtool: 'source-map',
    output: {
        path: path.join(__dirname, './build/'),
        filename: 'bundle.js',
        publicPath: '/build'
    },
    devServer: {
      inline: true,
      port: 3000
    },
    module: {
        loaders: [
            {test: /\.scss$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader')},
            {test: /\.js$/, exclude: /node_modules/, loader: 'babel'},
            {test: /\.(otf|eot|svg|ttf|woff|jpg)/, loader: 'url-loader?limit=8192'}
        ]
    }
};

module.exports.plugins = [
  new ExtractTextPlugin('app.css', {
    allChunks: true
  })
];
