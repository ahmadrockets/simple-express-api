var userModel = require('../models/users');
// Display all user
exports.get_all_users = function(req,res) {
  userModel.getAllUser(req,res);
};

exports.get_user_byname = function (req, res) {
  var nama = req.params.name;
  res.send(`Display user ${nama}`);
};