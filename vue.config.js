module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? './'
    : '/',
  pages: {
    index: {
      // entry for the page
      entry: 'src/main.js',
      title: 'Vue.js map using MapLibre GL JS',
    },
  }
}