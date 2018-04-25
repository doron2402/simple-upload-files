'use strict';
const formidable = require('formidable');
module.exports = function (req, res) {
  const uploadedFiles = [];
  try {
    const form = new formidable.IncomingForm({
      encoding: 'utf-8',
      uploadDir: './uploads',
      keepExtensions: true,
      maxFileSize: 20 * 1024 * 1024, // 20MB
      hash: 'md5'
    });

    form.on('progress', function(bytesReceived, bytesExpected) {
      console.log(`Progress: ${parseInt((bytesReceived/bytesExpected) * 100)}`);
    })
    .on('fileBegin', function(name, file) {
      console.log(`fileBegin: name: ${name} file: ${JSON.stringify(file)}`);
    })
    .on('file', function(name, file) {
      uploadedFiles.push(file);
    })
    .on('error', function(err) {
      console.error('Form error', err);
    })
    .on('aborted', function (){
      console.log(aborted);
    })
    .on('end', () => {
      console.log(`Upload complete: ${JSON.stringify(uploadedFiles)}`);
    });

    form.parse(req, function (err, fields, files) {
      if (err) {
        res.writeHead(500, { 'content-type': 'application/json' });
        return res.end(err);
      }
      res.writeHead(200, { 'content-type': 'application/json' });
      return res.end(JSON.stringify({ files: uploadedFiles }));
    });
  }
  catch (err) {
    res.writeHead(500, { 'content-type': 'application/json' });
    return res.end(err);
  }
};

