'use strict'

const pltClient = require('@platformatic/client')
const { join } = require('path')

async function generateNewslettersClientPlugin (app, opts) {
  app.register(pltClient, {
    type: 'openapi',
    name: 'newsletters',
    path: join(__dirname, 'newsletters.openapi.json'),
    url: opts.url,
    fullResponse: false
  })
}

generateNewslettersClientPlugin[Symbol.for('plugin-meta')] = {
  name: 'newsletters OpenAPI Client'
}
generateNewslettersClientPlugin[Symbol.for('skip-override')] = true

module.exports = generateNewslettersClientPlugin
module.exports.default = generateNewslettersClientPlugin
