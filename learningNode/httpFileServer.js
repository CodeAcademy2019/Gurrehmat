const http = require('http');
const fs = require('fs');

const port = process.argv[2];
const fileLocation = process.argv[3];
const server = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/json');
  // response.end(fs.createReadStream(fileLocation).pipe(response));
  const fileStream = fs.createReadStream(fileLocation);
  fileStream.pipe(response);
});
server.listen(port);
