var webpack = require("webpack");
var path = require("path");

module.exports = {
    entry: ['./src/entry.js'],
    devtool: 'source-map',
    output: {
        path: path.join(__dirname, "./build/"),
        filename: "bundle.js",
        publicPath: "/build"
    },
    devServer: {
      inline: true,
      port: 3000
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            {
              test: /\.js$/,
              exclude: /node_modules/,
              loader: 'babel',
              query: {
                presets: ['es2015', 'react']
              }
            }
        ]
    }
};
