const router = require('express').Router();
const { createSell, getSell, updatedSell, deleteSell } = require('../controllers/sell.controller');
const { validate } = require('../joiValidation');
const { authToken, Admin } = require('../middleware/auth');



// Creat/save sell/bill request's  logic start from here
router.post('/sells', authToken,validate('createSell'), createSell);
router.get('/sells',authToken, getSell);
router.patch('/sells/:id', authToken, validate('updateSell'), updatedSell);
router.delete('/sells/:id', authToken, deleteSell)

module.exports = router