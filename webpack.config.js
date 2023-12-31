const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
      mode: 'development',
      entry: ['./src/App.js', './src/index.js'],
      output: {
            path: path.resolve(__dirname, './dist'),
            filename: 'js/main.js',
      },
      devServer: {
            static: {
                  directory: path.resolve(__dirname, 'dist'),
            },
            port: 3000
      },
      plugins: [
            new HtmlWebpackPlugin({
                  template: './public/index.html',
                  filename: 'AfterIndex.html',
                  inject: true,
                  minify: true,
            }),
            new MiniCssExtractPlugin({
                  filename: './css/index.css',
            }),
      ],
      module: {
            rules: [
                  {
                        test: /\.js$/,
                        exclude: /node_modules/,
                        use: {
                              loader: 'babel-loader',
                              options: {
                                    presets: ['@babel/preset-react', '@babel/preset-env'],
                              },
                        },
                  },
                  {
                        test: /\.css$/,
                        use: [MiniCssExtractPlugin.loader, 'css-loader'],
                  },
            ],
      },
};



