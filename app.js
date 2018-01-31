const htmlStandards = require('reshape-standard')
const cssStandards = require('spike-css-standards')
const jsStandards = require('spike-js-standards')
const pageId = require('spike-page-id')
const Records = require('spike-records')
const env = process.env.SPIKE_ENV

const locals = {}

const records = new Records({
  addDataTo: locals,
  site: { file: 'data/site.json' }
});

module.exports = {
  devtool: 'source-map',
  ignore: ['**/layout.html', '**/_*', '**/.*', 'readme.md', 'yarn.lock'],
  reshape: htmlStandards({
    locals: ctx => {
      return ctx, Object.assign({ pageId: pageId(ctx) }, locals)
    },
    minify: env === 'production'
  }),
  postcss: cssStandards({
    minify: env === 'production'
  }),
  babel: jsStandards(),
  vendor: ['assets/js/**'],
  plugins: [records]
}
