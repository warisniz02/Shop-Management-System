const router = require('express').Router();
const { createSell, getSell, updatedSell } = require('../controllers/sell.controller');
const { validate } = require('../joiValidation');



// Creat/save sell/bill request's  logic start from here
router.post('/sells', validate('createSell'), createSell);
router.get('/sells', getSell);
router.patch('/sells/:id', validate('updateSell'), updatedSell);

module.exports = router