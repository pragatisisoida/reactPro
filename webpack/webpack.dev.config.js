var webpack = require('webpack');
var path = require('path');
var parentDir = path.join(__dirname, '../');
module.exports = {
	entry: [
		path.join(__dirname, '../index.js')
    ],
    module: {
		rules: [{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
				plugins:['transform-object-rest-spread'],
					presets: ['es2015', 'react']
			}
			},{
				test: /\.(css|scss)$/,
				loaders: ["style-loader", "css-loader","sass-loader"]
			}
		]
	},
	output: {
        path: parentDir + '/dist',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: parentDir,
        historyApiFallback: true
    }
}


