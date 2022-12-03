const router = require('express').Router();
const { creatStock, getStock, updateStock, deleteStock } = require('../controllers/stocks.controller');
const { validate } = require('../joiValidation')
const {authToken, Admin} = require('../middleware/auth')


router.post('/stocks',authToken, Admin, validate('creatStock'), creatStock)
router.get('/stocks', authToken, Admin,getStock)
router.patch('/stocks/:id',authToken, Admin, validate('updateStock'), updateStock)
router.delete('/stocks/:id', authToken, Admin, deleteStock)

module.exports = router;