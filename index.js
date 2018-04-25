'use strict';

const http = require('http');

const uploaderRoute = require('./routes/uploader');
const formRoute = require('./routes/form');
const notFoundRoute = require('./routes/notFound');
const PORT = 3000;

http.createServer(function (req, res) {
  if (req.url.toLowerCase() === '/upload' && req.method.toLowerCase() === 'post') {
    return uploaderRoute(req, res);
  }
  else if (req.url.toLowerCase() === '/form' && req.method.toLowerCase() === 'get') {
    return formRoute(req, res);
  }
  else {
    return notFoundRoute(req, res);
  }
}).listen(PORT, (err) => {
  if (err) {
    throw err;
  }
  console.log(`Server is running ${PORT}`);
});
