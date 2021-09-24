module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/CodeMirror-EasyCodeEditor/'
    : '/',
  outputDir: 'dist',
  lintOnSave: true,
};