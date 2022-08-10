const express = require('express');
const router = express.Router();
const webController = require('../controllers/webController');

// 
const signinjs = require('../controllers/signin')
const bodyParser = require("body-parser")
const urlencodedParser = bodyParser.urlencoded({exteded: false})

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
router.get('/signin', webController.signin);

// Signin POST
router.post("/signin", urlencodedParser, signinjs.signupform)
router.post("/userpage", urlencodedParser, signinjs.signinform)


router.get('/bar', graph.bar);
router.get('/scatter', graph.scatter);

module.exports = router;