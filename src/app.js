import 'es6-shim'
import app from 'ampersand-app'
import { loadCSS } from 'fg-loadcss'
import Router from './router'

// CSS
// require('./css/fonts.scss')
require('./css/index.scss')

// Load fonts that are part of the site, not part of the specimens.
// <link href="http://fonts.googleapis.com/earlyaccess/notosansjp.css" rel="stylesheet">
// <link href="https://fonts.googleapis.com/css?family=Noto+Sans" rel="stylesheet">

window.app = app.extend({
  init () {
    this.router = new Router()
    this.router.history.start()
    loadCSS('http://fonts.googleapis.com/earlyaccess/notosansjp.css')
    loadCSS('https://fonts.googleapis.com/css?family=Noto+Sans')
    loadCSS('/css/fonts.css')
  }
})

app.init()
