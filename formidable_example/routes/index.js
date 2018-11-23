const router = require('express').Router();
const path = require('path');

const uploadRoutes = require('./upload');

router.use('/upload', uploadRoutes);

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './../', 'public/', 'index.html'));
});

module.exports = router;
