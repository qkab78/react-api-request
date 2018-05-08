const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:'./src/index.js',
    output:{
        path:path.join(__dirname, '/dist'),
        filename:'index_bundle.js'
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        plugins:['babel-plugin-transform-class-properties']
                    }
                }
            }

        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:'React app',
            template:'./src/index.html'
        })
    ],
    devServer:{
        port:9000
    }
}