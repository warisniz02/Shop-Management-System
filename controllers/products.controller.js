const Product = require('../models/product');


const createProduct = async (req, res) => {
    const product = new Product(req.body);
    try {
        const saveProduct = await product.save()
        res.status(200).json(saveProduct)
    } catch (e) {
        res.status(400).json(e)
        console.log(e)
    }
}

const getProduct = async (req, res) => {
    try {
        const products = await Product.find()
        res.status(200).json(products)
    } catch (e) {
        res.status(400).json(e)
    }
}

const updatedProduct = async (req, res) => {
    try{
       const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body,{
        new : true, runValidators : true
       })
       if(!updatedProduct) return res.status(404).json({message : 'Invalid Id'})
      
       return res.status(200).json(updatedProduct)
    }catch(e){
       res.status(400).json(e)
       console.log(e)
    }
}

const removeProduct = async (req, res) => {
    try {
        const removedProduct = await Product.findByIdAndRemove(req.params.id)
        if (!removedProduct) {
            return res.status(404).json({ message: 'Not found put correct Id' })
        }
        return res.status(200).json(removedProduct)

    } catch (e) {
        return res.status(400).json(e)

    }
}

module.exports = {
    createProduct,
    getProduct,
    updatedProduct,
    removeProduct
}