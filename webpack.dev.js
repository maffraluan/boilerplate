const HtmlWebpackPlugin = require('html-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const webpack = require('webpack')
const Dotenv = require('dotenv-webpack')
const path = require('path')

const common = require('./webpack.common')

const { merge } = require('webpack-merge')

module.exports = merge(
  { ...common },
  {
    output: {
      path: path.resolve(__dirname, 'dist'),
      pathinfo: false,
      filename: '[name].js',
      sourceMapFilename: '[file].map[query]',
      chunkFilename: '[id].js',
      publicPath: '/'
    },
    mode: 'development',
    watchOptions: {
      ignored: /node_modules/
    },
    module: {
      rules: [
        {
          test: /\.(ts|js)x?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-react',
                '@babel/preset-typescript'
              ]
            }
          }
        }
      ]
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js']
    },
    devtool: 'source-map',
    devServer: {
      static: path.join(__dirname, 'public'),
      compress: true,
      historyApiFallback: true,
      port: 3000
    },
    plugins: [
      new ForkTsCheckerWebpackPlugin({
        async: false,
        typescript: {
          memoryLimit: 4096,
          profile: true
        }
      }),
      new HtmlWebpackPlugin({
        inject: true,
        template: './template.dev.html'
      }),
      new webpack.ProvidePlugin({
        React: 'react'
      }),
      new Dotenv({
        path: './.env.local',
        safe: true,
        systemvars: true
      })
    ]
  }
)
