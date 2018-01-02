const Jimp = require('jimp');
var imageBuffer;

module.exports = function(app) {
  app.get('/resize', (req, res) => {
    var imageUrl = req.query.image_url || '';
    var finalSize = parseInt(req.query.size);

    // move this code to controller later
    Jimp.read(imageUrl, function (err, image) {
      if (err) {
        console.log(err);
        return;
      }

      if(!isNaN(finalSize)) {
        // resize(width, height)
        image.resize(Jimp.AUTO, finalSize).getBuffer(Jimp.MIME_JPEG, onBuffer);
      } else {
        image.getBuffer(Jimp.MIME_JPEG, onBuffer);
      }
    });

    res.type('image/jpeg');
    res.send(imageBuffer);
  });
};

function onBuffer(err, buffer) {
  if (err) throw err;
  imageBuffer = buffer;
}
