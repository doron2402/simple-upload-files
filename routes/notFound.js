'use strict';

module.exports = function(req, res) {
  res.writeHead(404, {'Content-Type': 'application/json'});
  res.write('{ "code": "ok", "message": "NotFound" }');
  return res.end();
};
