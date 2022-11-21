// Require the framework and instantiate it
require('dotenv').config()
const Staff = require('./db/staff');
const fastify = require('fastify')({ logger: true });

fastify.get('/', async (request, reply) => {
  return { hello: 'world' }
});

// get cooks list
fastify.get('/getCooks', async (request, reply) => {
  const staff = await Staff.findOne({type: 'cooks'});
  return reply.code(200)
  .header('Content-Type', 'application/json; charset=utf-8')
  .send(staff);
});

// get waiters list
fastify.get('/getWaiters', async (request, reply) => {
  const staff = await Staff.findOne({type: 'waiters'});
  return reply.code(200)
  .header('Content-Type', 'application/json; charset=utf-8')
  .send(staff);
});

// Run the server!
const start = async () => {
  try {
    await fastify.listen(3000, '0.0.0.0')
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()