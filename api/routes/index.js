const express = require('express');

const router = express.Router();

const { flickrController }  = require('../controllers');

router.use((req, res, next) => {
  console.log(`${(new Date()).toISOString()}: ${req.method} ${req.url}`);
  next();
});

router.get('/search', flickrController.flickrSearchGet);

module.exports = router;
