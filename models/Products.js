var Sequelize = require("sequelize");
var db = require("../config/database.js");


const Product = db.define('products', {
  title:{
    type: Sequelize.DataTypes.STRING
  },
  price:{
    type: Sequelize.DataTypes.DOUBLE
  }
},{
  freezeTableName: true
});

module.exports = Product;