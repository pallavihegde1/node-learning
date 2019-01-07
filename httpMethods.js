const http = require('http');

const server = http.createServer((request, response) => {
  if (request.url === '/') {
    response.write('Hello World')
    response.end();
  }
  else if (request.url === '/one-page') {
    response.write('Hello World 1')
    response.end();
  }
})

server.listen(3006);
console.log('listening to port 3006');
