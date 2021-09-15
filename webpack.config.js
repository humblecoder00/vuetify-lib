const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
    .BundleAnalyzerPlugin;
const vueLoader = require('vue-loader');

module.exports = {
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /(node_modules|packages)/,
            },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                options: {
                    appendTsSuffixTo: [/\.vue$/],
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            // {
            //     test: /\.scss$/,
            //     use: ['style-loader', 'css-loader', 'sass-loader'],
            // },
            {
                test: /\.s(c|a)ss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: require('sass'),
                            sassOptions: {
                                fiber: require('fibers'),
                                // indentedSyntax: true // optional
                            },
                        },
                    },
                ],
            },
            {
                test: /\.(woff(2)?|ttf|eot)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/',
                        },
                    },
                ],
            },
        ],
    },

    plugins: [new vueLoader.VueLoaderPlugin()].concat(
        process.argv.includes('--analyze') ? [new BundleAnalyzerPlugin()] : []
    ),
};
