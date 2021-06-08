const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

router.post('/success-page', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'success-page.html'));
});

module.exports = router;
