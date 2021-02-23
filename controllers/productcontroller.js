var Product = require("../models/Products");

exports.getProduct = async(req,res)=>{
  try {
    const product = await Product.findAll();
    res.send(product);
  } catch (error) {
    console.log(error);
  }
}

exports.getProductById = async(req,res)=>{
  try {
    const product = await Product.findAll({
      where:{
        id:req.params.id
      }
    });
    res.send(product);
  } catch (error) {
    console.log(error);
  }
}

exports.createProduct = async (req, res) => {
  try {
    await Product.create(req.body);
    res.json({
      "message": "Product Created"
    });
  } catch (err) {
    console.log(err);
  }
}

exports.updateProduct = async(req, res)=>{
  try {
    await Product.update(req.body,{
      where:{
        id: req.params.id
      }
    })
    res.json({
      "message":"Product Updated"
    });
  } catch (error) {
    console.log(error);
  }
}

exports.deleteProduct = async(req,res)=>{
  try {
    await Product.destroy({
      where:{
        id: req.params.id
      }
    });
    res.json({
      "message": "Product Deleted"
    });
  } catch (error) {
    console.log(error);
  }
}