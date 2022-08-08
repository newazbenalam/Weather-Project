var mysql      = require('mysql');
var connection = require('../controllers/mysql');

let tbname = 'epa_daily_t'
let sql = `SELECT * FROM ${tbname}`
var a = connection.query(sql, function (error, results, fields) {
  if (error) throw error;
  // console.log(results)
  return results;
});

module.exports = a;