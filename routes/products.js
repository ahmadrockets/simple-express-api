var express = require('express');
var router = express.Router();
var productController = require('../controllers/productcontroller');

router.get('/', productController.getProduct);
router.get('/:id', productController.getProductById);
router.post('/', productController.createProduct);
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);

module.exports = router;
