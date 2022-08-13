const express = require('express');
const router = express.Router();
const webController = require('../controllers/webController');
const fileuploads = require('../controllers/fileupload');
const userDataEntry = require('../controllers/userDataEntry');

// 
const signinjs = require('../controllers/signin')
const bodyParser = require("body-parser")
const urlencodedParser = bodyParser.urlencoded({exteded: false})
router.use(urlencodedParser)

const multerUpload = require("../controllers/multer")
router.use(multerUpload.single("csvfile"))

const graph = require('../models/graph');
const fileUpload = require('express-fileupload');
const { userDataEntryForm } = require('../controllers/userDataEntry');

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
router.get('/userdashboard', webController.userdashboard);

// Signin POST
router.post("/signin", urlencodedParser, signinjs.signupform)
router.post("/userpage", urlencodedParser, signinjs.signinform)
router.post("/csvupload", fileuploads.csvupload)
router.post("/userdashboard", urlencodedParser, userDataEntry.userDataEntryForm)


// NEWAZ GRAPHS
router.get('/bar', graph.bar);
router.get('/scatter', graph.scatter);

module.exports = router;