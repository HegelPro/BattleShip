const onEvents = require('./onEvents')

function connection(ws) {
  ws.on('message', onEvents.message);
    
  ws.on('close', onEvents.close);
    
  ws.on('error', onEvents.error);
}

module.exports = connection