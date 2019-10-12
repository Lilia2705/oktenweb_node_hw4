const {provider} = require('../../datBase');

module.exports  = async (req, res, next) => {
    try {
        const {email, password} = req.body;
        const query = `SELECT * FROM users WHERE email = '${email}' AND password = '${password}'`;

        const [userDb] = await provider.promise().query(query);

        if (!userDb.length) {
            throw new Error('Wrong data')
        }

        req.user = userDb;

        next()
    } catch (e) {
        res.status(400).json(e.message)
    }
};