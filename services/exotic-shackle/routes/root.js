'use strict'
/// <reference path="../newsletters/newsletters.d.ts" />
/// <reference path="../members/members.d.ts" />

/** @param {import('fastify').FastifyInstance} fastify */
module.exports = async function (fastify, opts) {
  fastify.get('/', async (request, reply) => {
    return { hello: fastify.example }
  })

  fastify.get('/newsletters-and-members', async (request, reply) => {
    const newsletters = await fastify.newsletters.getNewsletter({})
    const members = await fastify.members.getMembers({})
    return { newsletters, members }
  })
}
