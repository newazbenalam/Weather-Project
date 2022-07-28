/**
 * GET /
 * Homepage
 */
exports.home = async(req, res) => {
  res.render('index');
}