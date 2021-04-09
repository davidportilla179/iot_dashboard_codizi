const express = require('express');
const app = express();
const server= require('http').Server(app);
const io = require('socket.io')(server);
const PORT = 8080;

app.use(express.static('public'));

io.on('connection', (socket) => {
  console.log('Nuevo cliente conectado');
  socket.emit('mensaje', 'Bienvenido');
});
//mqtt
const mqtt = require('mqtt');
const client = mqtt.connect('mqtt://test.mosquitto.org');

client.on('connect', () => {
  client.subscribe('pots', function (err) {
    if (!err) {
      client.publish('node1', 'Server device 1: ESP32 ON');
      console.log('ESP32 ON')
    }
  })
});

client.on('message', (topic, message) => {
  const data = JSON.parse(message);
  console.log(data);
  io.emit('mqtt', data);
});

server.listen(PORT, function() {
  console.log(`Servidor iniciado en el puerto: http://localhost:${PORT}`);
});
