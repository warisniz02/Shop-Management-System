const router = require('express').Router();
const { creatStock, getStock, updateStock } = require('../controllers/stocks.controller');
const { validate } = require('../joiValidation')



router.post('/stocks', validate('creatStock'), creatStock)
router.get('/stocks', getStock)
router.patch('/stocks/:id', validate('updateStock'), updateStock)

module.exports = router;