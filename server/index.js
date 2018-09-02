// const WebSocketServer = require('ws').Server;
// const wss = new WebSocketServer({ port:5000});
// const connection = require('./web-socket/connetion')
// wss.on('connection', ws => connection(ws) )

const WSServer = require('./web-socket/ws-server')

var wsServer = new WSServer()

wsServer.addConnaction()
// wsServer._wssEmitter.emit('playVsBot')