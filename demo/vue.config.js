module.exports = {
  baseUrl: './',
  chainWebpack: config => {
    config.module
      .rule('js')
      .use('babel-loader')
      .loader('babel-loader')
      .tap(options => {
        return { presets: ['es2015'] }
      })
  }
}