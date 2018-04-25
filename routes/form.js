'use strict';

module.exports = function(req, res) {
  res.writeHead(200, {'content-type': 'text/html'});
  return res.end(
    '<form action="/upload" enctype="multipart/form-data" method="post">'+
    '<input type="text" name="title"><br>'+
    '<input type="file" name="upload" multiple="multiple"><br>'+
    '<input type="submit" value="Upload">'+
    '</form>'
  );
};
