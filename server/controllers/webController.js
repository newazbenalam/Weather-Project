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

exports.rank = async(req, res) => {
  res.render('rank');
}

exports.aqi = async(req, res) => {
  res.render('aqi');
}

exports.signup = async(req, res) => {
  let cities = ["Dhaka", "Chittagong", "Khulna", "Sylhet", "Rajshahi", "Mymensingh", "Barisal", "Rangpur", "Comilla", "Narayanganj", "Gazipur"]
  res.render('signup', {cities});
}

exports.about = async(req, res) => {
  res.render('about');
}