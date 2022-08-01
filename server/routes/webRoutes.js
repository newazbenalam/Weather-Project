const express = require('express');
const router = express.Router();
const webController = require('../controllers/webController');

/**
 * App Routes here
 */
router.get('/', webController.home);
router.get('/home', webController.index);
router.get('/graphs', webController.graphs);

module.exports = router;