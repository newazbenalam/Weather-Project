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