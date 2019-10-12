const {provider} = require ('../../datBase');

module.exports = async (req, res) => {
    const {city, metres, street, price} = req.body;
    const query = `INSERT INTO houses(city, metres, street, price) VALUES (?, ?, ?, ?)`;
    await provider.promise().query(query, [city, metres, street, price]);
    res.redirect('houses')
}