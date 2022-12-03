const router = require('express').Router();
const { createProduct, getProduct, removeProduct, updatedProduct } = require('../controllers/products.controller');
const { validate } = require('../joiValidation');
const {authToken, Admin} = require('../middleware/auth')

router.post('/products',authToken, Admin, validate('createProduct'), createProduct);
router.get('/products',authToken,Admin,  getProduct);
router.patch('/products/:id',authToken,Admin, validate('updateProduct'), updatedProduct)
router.delete('/products/:id',authToken,Admin, removeProduct);

module.exports = router;