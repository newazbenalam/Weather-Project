const express = require('express');
const router = express.Router();
const webController = require('../controllers/webController');
const graph = require('../models/graph')

/**
 * App Routes here
 */
router.get('/', webController.home);
router.get('/home', webController.index);
router.get('/aqi', webController.aqi);
router.get('/graphs', webController.graphs);
router.get('/map', webController.map);
router.get('/rank', webController.rank);

router.get('/bar', graph.bar);

module.exports = router;