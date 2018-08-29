const onMessage = require('./actionsOnEvents/onMessage')

module.exports.message = function(message) {

  onMessage.call(this, message)
}

module.exports.close = function() {
  console.log('-user')
}

module.exports.error = function(e) {
  console.log(e)
}