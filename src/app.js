import 'es6-shim'
import app from 'ampersand-app'
// import { loadCSS } from 'fg-loadcss'
import Router from './router'
// import data from './data'

// CSS
// require('./css/fonts-critical.css')
// require('./css/index.scss')

window.app = app.extend({
  init () {
    this.router = new Router()
    this.router.history.start()
    // loadCSS('/css/fonts.css')
  }
})

app.init()
