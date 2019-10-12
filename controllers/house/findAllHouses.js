const {provider} = require('../../datBase');

module.exports = async (req,res) => {
    const [houses] = await provider.promise().query('SELECT * FROM houses');
    res.json(houses)
};
