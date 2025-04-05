const path = require('path');

module.exports = {
    entry: './src/index.ts', // 入口文件
    output: {
        path: path.resolve(__dirname, 'dist'), // 输出目录
        filename: 'index.js',                 // 输出文件名
        library: 'ReactComponentLibrary',     // 库名称
        libraryTarget: 'umd',                 // 支持 UMD 格式
        globalObject: 'this',                 // 确保兼容 Node 和浏览器环境
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],  // 解析扩展名
        alias: {
            '@src/components': path.resolve(__dirname, 'src/components'),
            react: path.resolve('node_modules/react'),
            'react-dom': path.resolve('node_modules/react-dom'),
        },
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,              // 匹配 TypeScript 文件
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,                   // 匹配 CSS 文件
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    externals: {
        react: 'react',                       // 将 React 作为外部依赖
        'react-dom': 'react-dom',
    },
    devServer: {
        static: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
    },
};
