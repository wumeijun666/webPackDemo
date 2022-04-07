var path = require('path');
module.exports = {
    entry: './a.js',
    output: {
        path: path.resolve(__dirname, ''),
        filename: 'bundle3.js'
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }]
    },
    mode: 'none'
};