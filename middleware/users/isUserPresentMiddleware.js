const {provider} = require ('../../datBase');
module.exports = async (req, res, next) => {
    try {
        const { user_id } = req.params;
        const query = `SELECT * FROM users  WHERE id = ${user_id}`;
        const [isUserPresent] = await provider.promise().query(query);

        if (!isUserPresent.length) {
            throw new Error(`User with ID ${user_id} doesn't exist`)
        }

        req.user = isUserPresent;

        next();
    } catch (e) {
        res.status(400).json(e.message)
    }
}