var connection = require('../controllers/mysql');

let tbname = 'epa_daily_t'
let sql = `SELECT mean, Daily FROM ${tbname}`

exports.bar = async(req, res) => {
  connection.query(sql, function (error, results) {
    if (error) throw error;
    // console.log(results)
    
    

    arr = Object.values(results[0])
    res.send(arr);
  });
}