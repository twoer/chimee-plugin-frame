const ora = require('ora')
const chalk = require('chalk')
const webpack = require('webpack')
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const config = {
  entry: ['./src/index.js'],
  output: {
    path: path.resolve(__dirname, './'),
    filename: '../dist/index.js',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use:
            [
              {
                loader: "css-loader", // translates CSS into CommonJS
                  options: {
                    minimize: process.env.NODE_ENV === 'production'
                  }
              },{
                loader: "sass-loader", // compiles Sass to CSS
              }
            ]
        })
      },
      {
        test: /\.js$/,
          loader: 'babel-loader',
          query: {
              presets: ['es2015'] //按照最新的ES6语法规则去转换
          },
          exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new UglifyJsPlugin({
      uglifyOptions: {
        compress: {
          warnings: false
        }
      },
      sourceMap: false,
      parallel: true
    }),
    new ExtractTextPlugin({
      filename: '../dist/index.css'
    })
   ]
};

var spinner = ora('building for production...')
spinner.start()
webpack(config, function (err, stats) {
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n\n')

    console.log(chalk.cyan('  Build complete.\n'))
  })