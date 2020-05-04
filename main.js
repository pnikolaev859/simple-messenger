const Express = require('express');
let http = require('http');

const app = new Express();
http = http.createServer(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

io.on('connection', (socket) => {
  socket.on('new msg', (msg) => {
    io.emit('new msg', msg);
  });
});

http.listen(3000);

