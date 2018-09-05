const {generateRandomNumber} = require('../helper')

var min = 4, max = 4

for( var index = 0; index < 100000; index++ ) {
  var ran = generateRandomNumber(100)
  if( ran < min ) min = ran

  if( ran > max ) max = ran
}

console.log('max = ' + max, 'min = ' + min)
