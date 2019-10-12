const {provider} = require('../../datBase')

module.exports = async (req,res) => {
    const [users] = await provider.promise().query('SELECT * FROM users');
    res.json(users)
};
