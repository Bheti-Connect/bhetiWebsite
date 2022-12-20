module.exports ={
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: __dirname + 'public/assets',
        filename: 'bundle.js',
        publicPath: '/assets/'
    },
    devServer: {
        inline: true,
        contentBase: './public',
        port: 3000
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader',
            options: {
                presets: ['react',]
            },
        },
        {
            test: /\.json$/,
            exclude: /(node_modules)/,
            loader: 'json-loader',
            
        },
        {
            test: /\.css$/,
            exclude: /(node_modules)/,
            use: [ 'style-loader', 'css-loader']
        },
        {
            test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
            exclude: /node_modules/,
            use: ['file-loader?name=[name].[ext]'] // ?name=[name].[ext] is only necessary to preserve the original file name
        }
        ]
    }
}