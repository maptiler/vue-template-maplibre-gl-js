module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vue-template-maplibre-gl-js/'
    : '/',
  outputDir: 'docs',
  pages: {
    index: {
      // entry for the page
      entry: 'src/main.js',
      title: 'Vue.js map using MapLibre GL JS',
    },
  }
}