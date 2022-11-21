const Helper = require( './helper' )

test( 'properly gets prev and next', () => {
  expect( Helper.getPrevNext( 'monday' ) ).toEqual( {
    prev: 'none',
    next: 'tuesday'
  } )
  expect( Helper.getPrevNext( 'tuesday' ) ).toEqual( {
    prev: 'monday',
    next: 'wednesday'
  } )
  expect( Helper.getPrevNext( 'wednesday' ) ).toEqual( {
    prev: 'tuesday',
    next: 'thursday'
  } )
  expect( Helper.getPrevNext( 'thursday' ) ).toEqual( {
    prev: 'wednesday',
    next: 'friday'
  } )
  expect( Helper.getPrevNext( 'friday' ) ).toEqual( {
    prev: 'thursday',
    next: 'none'
  } )
} )