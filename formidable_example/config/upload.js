const formidable = require('formidable');

module.exports.uploadData = function(req, res) {
  let form = new formidable.IncomingForm();

  form.encoding = 'utf-8';
  form.uploadDir = './uploads'; //defaults to /tmp || os.tmpdir()
  form.keepExtensions = true; //defaults to false
  form.hash = 'md5'; //defaults to false
  form.multiples = true; //defaults to false

  form.on('progress', function(bytesReceived, bytesExpected) {
    console.log(`${bytesReceived}/${bytesExpected}`);
  });

  form.on('error', function(err) {
    console.error(err);
  });

  form.parse(req, (err, fields, files) => {
    console.log(fields, files);
    res.send('Data saved !');
  });
  return;
};
