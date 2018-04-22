const path = require('path');

const paths = {
    DIST: path.resolve(__dirname, 'dist'),
    NODE_MODULES: path.resolve(__dirname, 'node_modules'),
    SRC: path.resolve(__dirname, 'src')
}

module.exports = {

    entry: path.join(paths.SRC, 'index.js'),

    output: {
        path: paths.DIST,
        filename: 'bundle.js'
    },

    node: {
        console: true,
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    },

    resolve: {
        modules: ['node_modules', './src'],
        extensions: ['.js', '.jsx']
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [ 'babel-loader' ]
            }, 
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [ 'babel-loader', 'eslint-loader' ]
            }, 
            { 
                test: /\.scss$/, 
                exclude: /node_modules/,
                use: [ 'style-loader', 'css-loader', 'sass-loader' ]
            }
        ]
    }
}