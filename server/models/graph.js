var connection = require('../controllers/mysql');

let tbname = 'epa_daily_t'
let sql = `SELECT mean, Daily FROM ${tbname}`
let arrX = [], arrY = [], arr2D = [];

exports.bar = async(req, res) => {
  connection.query(sql, function (error, results) {
    if (error) throw error;
    

    for (let i = 0; i < results.length; i++) {
      arrX[i] = Object.values(results[i])[0]; 
      arrY[i] = Object.values(results[i])[1]; 
    }
    arr2D = [arrY, arrX];
    // arr = Object.values(results[0])
    res.send(arr2D);
  });
}