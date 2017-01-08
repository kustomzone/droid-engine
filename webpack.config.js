
const webpack = require('webpack')
const path = require('path')

const config = {
    entry: {
        game: './src/game.js'
        //engine: './src/DroidEngine/src/Engine.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist')
    },
    node: {
        fs: "empty"
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    }
}

module.exports = config