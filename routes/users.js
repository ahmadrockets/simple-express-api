var express = require('express');
var router = express.Router();
var userController = require('../controllers/usercontroller');

/* GET users listing. */
router.get('/', userController.get_all_users);
router.get('/:name', userController.get_user_byname);

module.exports = router;
