const Sell = require('../models/sell');

const createSell = async (req, res) => {
    const sell = new Sell(req.body);
    try {
        const saveSell = await sell.save();
        return res.status(200).json(saveSell);
    } catch (e) {
        res.status(400).json(e)
        console.log(e)
    }
}

const getSell = async (req, res) => {
    try {
        const sells = await Sell.find()
        return res.status(200).json(sells);
    } catch (e) {
        return res.status(400).json(e);
    }
}

const updatedSell = async (req, res) => {
    try {
        const updatedSell = await Sell.findByIdAndUpdate(req.params.id, req.body, {
            new: true, runvalidators: true
        });
        if(!updatedSell) return res.status(404).json({message : 'Invalid Id'})
         return res.status(200).json(updatedSell)
    } catch (e) {
        res.status(400).json(e)
    }
}

const deleteSell = async (req, res) => {
  try{
   const sell = await Sell.findByIdAndDelete(req.params.id)
        res.status(200).json(sell)
  }catch(e){
       res.status(400).send(e)
  }
}



module.exports = { createSell, getSell, updatedSell , deleteSell};