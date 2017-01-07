const webpack = require('webpack')
const path = require('path')

const config = {
    entry: {
        game: './test-game/src/game.js'
        //engine: './test-game/src/DroidEngine/src/Engine.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './test-game/dist')
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