const router = require('express').Router();

const uploadData = require('./../config/upload').uploadData;

router.get('/', (req, res) => {
  res.send('Hit upload');
});

router.post('/', uploadData);

module.exports = router;
