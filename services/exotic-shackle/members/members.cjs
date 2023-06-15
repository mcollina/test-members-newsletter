'use strict'

const pltClient = require('@platformatic/client')
const { join } = require('path')

async function generateMembersClientPlugin (app, opts) {
  app.register(pltClient, {
    type: 'openapi',
    name: 'members',
    path: join(__dirname, 'members.openapi.json'),
    url: opts.url,
    fullResponse: false
  })
}

generateMembersClientPlugin[Symbol.for('plugin-meta')] = {
  name: 'members OpenAPI Client'
}
generateMembersClientPlugin[Symbol.for('skip-override')] = true

module.exports = generateMembersClientPlugin
module.exports.default = generateMembersClientPlugin
