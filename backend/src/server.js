// Require the framework and instantiate it
require( 'dotenv' ).config()
const Service = require( './service' );
const fastify = require( 'fastify' )( {
  logger: true
} );

fastify.get( '/', async ( request, reply ) => {
  return {
    hello: 'world'
  }
} );

// get cooks list
fastify.get( '/getCooks', async ( request, reply ) => {
  const staff = await Service.getStaffByType('cooks');
  return reply.code( 200 )
    .header( 'Content-Type', 'application/json; charset=utf-8' )
    .send( staff );
} );

// get waiters list
fastify.get( '/getWaiters', async ( request, reply ) => {
  const staff = await Service.getStaffByType('waiters');

  return reply.code( 200 )
    .header( 'Content-Type', 'application/json; charset=utf-8' )
    .send( staff );
} );

// get staff by day and type
fastify.get( '/getStaff', async ( request, reply ) => {
  const {
    type,
    day
  } = request.query;

  const staff = await Service.getStaff({type, day});

  return reply.code( 200 )
    .header( 'Content-Type', 'application/json; charset=utf-8' )
    .send( staff );
} );

fastify.register( require( 'middie' ), {
  hook: 'onRequest' // default
} ).then( () => {
  fastify.use( require( 'cors' )() )
} )



// Run the server!
const start = async () => {
  try {
    await fastify.listen( 3001, '0.0.0.0' )

  } catch ( err ) {
    fastify.log.error( err )
    process.exit( 1 )
  }
}
start()