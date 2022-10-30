const Stock = require('../models/stock');


const creatStock = async (req, res) => {
    try {
        const stock = new Stock(req.body);
        const creatStock = await stock.save();
        res.status(200).json(creatStock)
    } catch (e) {
        res.status(400).json(e)
    }
};

const getStock = async (req, res) => {
    try {
        const getStock = await Stock.find()
        res.status(200).json(getStock)
    } catch (e) {
        res.status(400).json(e)
    }
};

const updateStock = async (req, res) => {
    try {
        const updatedStock = await Stock.findByIdAndUpdate(req.params.id, req.body, {
            new: true, runvalidators: true
        })
        if(!updatedStock) return res.status(404).json({message : 'Invalid Id'})
      return   res.status(200).json(updatedStock)
    } catch (e) {
        res.status(400).json(e)
    }
};

module.exports = {
    creatStock,
    getStock,
    updateStock,
}
