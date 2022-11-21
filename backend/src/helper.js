module.exports = {
  getPrevNext: ( day ) => {

    switch ( day ) {
      case 'monday':
        return {
          prev: 'none', next: 'tuesday'
        };
      case 'tuesday':
        return {
          prev: 'monday', next: 'wednesday'
        };
      case 'wednesday':
        return {
          prev: 'tuesday', next: 'thursday'
        };
      case 'thursday':
        return {
          prev: 'wednesday', next: 'friday'
        };
      case 'friday':
        return {
          prev: 'thursday', next: 'none'
        };
    }

  }
}