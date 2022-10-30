const validations = {
    ... require('./validateUser'),
    ... require('./validateProducts'),
    ... require('./validateSell'),
    ... require('./validateStock')
}

const validate = (item) => {
    return (req, res, next) => {
        const { value, error } = validations[item].validate(req.body);
        if (error) return res.status(400).json({ message: error[0].details });
        next();
    }
}

module.exports = {
   validate
}