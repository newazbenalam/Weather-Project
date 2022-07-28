const express = require('express');
const router = express.Router();
const webController = require('../controllers/webController');

/**
 * App Routes here
 */
router.get('/', webController.home);

module.exports = router;