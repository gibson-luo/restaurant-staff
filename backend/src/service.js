const Staff = require( './db/staff' );
const Helper = require( './helper' );
const _ = require( 'lodash' );

module.exports = {

  getStaffByType: ( type ) => {
    return Staff.findOne( {
      type
    } );
  },

  getStaff: ( { type, day} ) => {
    return Staff.findOne( {
      type
    }, day ).then( s => {
      const {
        prev,
        next
      } = Helper.getPrevNext( day );
      return {
        staff: _.get( s, day ),
        type,
        day,
        prev,
        next
      };
    } );
  }

}