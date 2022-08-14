var connection = require('../controllers/mysql');

let tbname = 'epa_daily_t'
let arrX = [], arrY = [], arr2D = [];

exports.bar = async(req, res) => {
  let sql = `SELECT
  avg(mean),
  STR_TO_DATE(Daily, '%d/%m/%Y') AS DAY,
  DATE_FORMAT(STR_TO_DATE(Daily, '%d/%m/%Y'), '%m/%Y') AS MONTH,
  DATE_FORMAT(STR_TO_DATE(Daily, '%d/%m/%Y'), '%Y') AS YEAR
  FROM
    ${tbname}
  GROUP BY MONTH ORDER BY DAY;`;

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

exports.scatter = async(req, res) => {
  let sql = `SELECT avg(mean), Daily FROM ${tbname} WHERE Daily  like "%/2020" GROUP BY Daily ORDER BY Daily;`
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