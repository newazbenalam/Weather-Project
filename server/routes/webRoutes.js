const express = require('express');
const router = express.Router();
const webController = require('../controllers/webController');

/**
 * App Routes here
 */
router.get('/', webController.home);
router.get('/home', webController.index);
router.get('/graphs', webController.graphs);
router.get('/rank', webController.graphs);
router.get('/aqi', webController.graphs);
router.get('/signup', webController.signup);
router.get('/about', webController.about);

module.exports = router;