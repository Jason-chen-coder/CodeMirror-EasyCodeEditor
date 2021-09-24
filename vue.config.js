/*
 * @Descripttion:
 * @version:
 * @Author: Jason chen
 * @Date: 2021-09-24 15:49:42
 * @LastEditors: Jason chen
 * @LastEditTime: 2021-09-24 15:49:42
 */
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/CodeMirror-EasyCodeEditor/'
    : '/',
  outputDir: 'dist',
  lintOnSave: true,
};