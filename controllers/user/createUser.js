const {provider} = require ('../../datBase');

module.exports = async (req, res) => {
    const {name, email, password} = req.body;
    const query = `INSERT INTO users(name, email, password) VALUES (?, ?, ?)`;
    await provider.promise().query (query, [name, email, password]);

    res.redirect('users')
}