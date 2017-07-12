var path = require('path')
// var ora = require('ora')
var stylus = require('stylus')
var webpack = require('webpack')
var merge = require('webpack-merge')
var webpackConfig = require('./webpack.conf')

var webpackConfig = merge(webpackConfig, {
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: path.resolve(__dirname, '../dist'),
    filename: 'care.js',
    library: 'care',
    libraryTarget: "umd",
    // libraryTarget: "var",
    umdNamedDefine: true
  },
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: false,
      }
    })
  ],
  watch: true
})

// var spinner = ora('building for production...')
// spinner.start()

webpack(webpackConfig, function (err, stats) {
  // spinner.stop()
  if (err) throw err
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n')
})