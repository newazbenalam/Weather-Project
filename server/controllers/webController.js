/**
 * GET /
 * Homepage
 */


exports.index = async(req, res) => {
  res.render('index');
}

exports.home = async(req, res) => {
  res.render('home');
}

exports.graphs = async(req, res) => {
  res.render('graphs');
}

exports.aqi = async(req, res) => {
  res.render('aqi');
}

exports.map = async(req, res) => {
  res.render('map');
}

exports.rank = async(req, res) => {
  res.render('rank');
}

exports.bar = async(req, res) => {
  // var a = async ()=> require('../models/newaz');
  res.send(require('../models/newaz').bar)
}
