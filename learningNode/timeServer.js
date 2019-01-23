const net = require('net');

const port = process.argv[2];
const server = net.createServer((socket) => {
  const date = new Date();
  const month = date.getMonth() + 1;
  const monthString = (month < 10) ? `0${month}` : month.toString();
  const dateString = `${date.getFullYear()}-${monthString}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}\n`;
  socket.end(dateString);
});

server.listen(port);
