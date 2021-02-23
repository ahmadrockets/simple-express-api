var connection = require('../helper/database');
const { responseData, responseMessage } = require('../utils/response-handler');

exports.getAllUser = function(req,res){
  connection.query('SELECT * FROM users', function (err,rows) {
    return res.status(200).json(rows);
  });
}