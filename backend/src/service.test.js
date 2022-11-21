const Service = require( './service' )
const Staff = require( './db/staff' )
const mockingoose = require( 'mockingoose' );
const mongoose = require( './db/mongo' );

test( 'properly gets staff', () => {
  mockingoose( Staff ).toReturn( {
    "_id": "637b980309a4508178035213",
    "monday": [
      "John",
      "William",
      "James",
      "Charles"
    ]
  }, 'findOne' );


  const type = 'cooks';
  const day = 'monday';

  expect( Service.getStaff( {
    type,
    day
  } ) ).resolves.toEqual( {
    "staff": [
      "John",
      "William",
      "James",
      "Charles"
    ],
    "type": "cooks",
    "day": "monday",
    "prev": "none",
    "next": "tuesday"
  } )
} )

test( 'properly gets staff by type', async () => {
  mockingoose( Staff ).toReturn( {
    "_id": "637baaf609a4508178035214",
    "type": "waiters",
    "monday": [
      "Will",
      "Jesse",
      "Oscar",
      "Lewis"
    ],
    "tuesday": [
      "Peter",
      "Benjamin",
      "Frederick",
      "Willie",
      "Alfred",
      "Sam"
    ],
    "wednesday": [
      "Roy",
      "Herbert",
      "Jacob",
      "Tom",
      "Elmer",
      "Carl",
      "Lee"
    ],
    "thursday": [
      "Howard",
      "Martin",
      "Michael",
      "Bert"
    ],
    "friday": [
      "Herman",
      "Jim",
      "Francis",
      "Harvey",
      "Earl",
      "Eugene",
      "Ralph",
      "Ed"
    ]
  }, 'findOne' );

  
  const type = 'waiters';

  const result = await Service.getStaffByType(type);

  expect( result._id ).toEqual( mongoose.Types.ObjectId("637baaf609a4508178035214") )
} );

// afterAll( async () => {
//   await mongoose.disconnect();
// } );