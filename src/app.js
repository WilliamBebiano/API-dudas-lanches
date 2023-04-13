const express = require('express')
const routes = require('./routes')
const { resolve } = require('path')

require('./database')

class App {
  constructor() {
    this.app = express()
    this.middlewares()
    this.routes()
  }

  middlewares () {
    this.app.use(express.json())
    this.app.use('/product-file', express.static(resolve(__dirname, '..','uploads')))
  }

  routes () {
    this.app.use(routes)
  }
}

module.exports = new App().app