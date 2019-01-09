const http = require('http');
const fs = require('fs');

http.createServer(function (req, res) {
  fs.writeFile('hello-world.txt', 'Hello to this great world', 'utf8', (err) => {
    res.end();
  });
}).listen(3000);
