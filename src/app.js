import 'es6-shim'
import app from 'ampersand-app'
import { loadCSS } from 'fg-loadcss'
import Router from './router'

// CSS
// require('../build/css/fonts.css')
require('./css/index.scss')

// Load fonts that are part of the site, not part of the specimens.
// <link href="http://fonts.googleapis.com/earlyaccess/notosansjp.css" rel="stylesheet">
// <link href="https://fonts.googleapis.com/css?family=Noto+Sans" rel="stylesheet">

window.app = app.extend({
  init () {

    // Remove `.no-js` class from root for progressively enhanced styling
    var el = document.getElementById('js-root')
    el.classList.remove('no-js')

    loadCSS('http://fonts.googleapis.com/earlyaccess/notosansjp.css')
    loadCSS('https://fonts.googleapis.com/css?family=Noto+Sans')
    loadCSS('/css/fonts.css')

    this.router = new Router()
    this.router.history.start()
  }
})

app.init()
