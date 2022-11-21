const mongoose = require( './mongo' );
const {
  Schema
} = mongoose;

// Staff model
const StaffSchema = new Schema( {
  type: String,
  monday: [ String ],
  tuesday: [ String ],
  wednesday: [ String ],
  thursday: [ String ],
  friday: [ String ]
} );

module.exports = mongoose.model( 'Staff', StaffSchema, 'staff' );