const Field = require("../battle-ship/field/field")
var fields = {}

module.exports.generatyField = function(req, res) {
  var key = Math.random()  

  fields[key] = new Field()

  res.status(200).json({
    key: key,
    field: fields[key]
  })
} 

module.exports.getField = function(req, res) {
  var key = req.body.key

  console.log(key, fields[key]);

  res.status(200).json()
} 