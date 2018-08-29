module.exports = function(message) {
  if(message === '' && message === undefined) this.close(1007, "Nothing")

  var message = JSON.parse(message)
  console.log(message.message);
  
  this.send(JSON.stringify(message))
}