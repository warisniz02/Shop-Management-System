const router = require('express').Router();
const { createProduct, getProduct, removeProduct, updatedProduct } = require('../controllers/products.controller');
const { validate } = require('../joiValidation');


router.post('/products', validate('createProduct'), createProduct);
router.get('/products', getProduct);
router.patch('/products/:id', validate('updateProduct'), updatedProduct)
router.delete('/products/:id', removeProduct);

module.exports = router;