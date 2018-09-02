const WebSocketServer = require('ws').Server;
const wss = new WebSocketServer({ port:5000});

const BattleShip = require('./battle-ship/battle-ship')
const PlayerFabric = require('./battle-ship/players/player-fabric')

wss.on('connection', (ws) => {
  console.log('WebSocket connection!');

  const battleShip = new BattleShip()
  const gamer = PlayerFabric.createPlayer('gamer')

  ws.on('message', (event) => {
    const data = JSON.parse(event)

    switch (data.event) {
      case 'ganirateField':
        gamer.putShips()

        ws.send(JSON.stringify({
          event: 'getMyField',
          data:{field: gamer.getField()}
        }))
        break;
      case 'connect':
        
        break;
      case 'start':
        const computer = PlayerFabric.createPlayer('computer')
        
        battleShip.join(gamer)
        battleShip.join(computer)
        computer.putShips()

        ws.send(JSON.stringify({
          event: 'getEnemyField',
          data:{field: gamer.getEnemyField()}
        }))
        break;
      case 'clientFire':
        battleShip._playerOne.fire(data.data.position)

        ws.send(JSON.stringify({
          event: 'getEnemyField',
          data:{field: gamer.getEnemyField()}
        }))

        ws.send(JSON.stringify({
          event: 'getMyField',
          data:{field: gamer.getField()}
        }))
        break;
     }
  })


  ws.send(JSON.stringify({
    event: 'getMyField',
    data:{field: gamer.getField()}
  }))

  ws.on('close', () => {
    console.log('disconnected');
  })

})