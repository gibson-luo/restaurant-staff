// Require the framework and instantiate it
require('dotenv').config()
const Staff = require('./db/staff');
const Helper = require('./helper');
const fastify = require('fastify')({ logger: true });
const _ = require('lodash');

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

// get staff by day and type
fastify.get('/getStaff', async (request, reply) => {
  const { type, day } = request.query;
  const staff = await Staff.findOne({type: type},  day).then(s => {
    const {prev, next} = Helper.getPrevNext(day);
    return {
      staff: _.get(s, day),
      type,
      day,
      prev,
      next
    };
  });
  
  return reply.code(200)
  .header('Content-Type', 'application/json; charset=utf-8')
  .send(staff);
});

fastify.register(require('middie'), {
    hook: 'onRequest' // default
}).then(() => {
  fastify.use(require('cors')())
})



// Run the server!
const start = async () => {
  try {
    await fastify.listen(3001, '0.0.0.0')
    
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()