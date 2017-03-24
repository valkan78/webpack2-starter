// const path = require('path');

const config = {
    context: __dirname + '/src',

    entry: {
        index: './index'
    },

    output: {
        path: __dirname + '/dist',
        filename: "[name].js",
        publicPath: "/"
    },

    watch: true,

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                options: {
                    presets: ['es2015']
                }
            }
        ]
    },

    resolve: {
        extensions: ['.js', '.html', '.scss'],
        modules: [
            __dirname + "/src",
            "node_modules"
        ]
    },

    devServer: {
        contentBase: __dirname + "/dist",
        compress: true,
        port: 9002
    }

};

module.exports = config;
