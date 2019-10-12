const {provider} = require ('../../datBase');
module.exports = async (req, res, next) => {
    try {
        const {house_id} = req.params;
        const query = `SELECT * FROM houses  WHERE id = ${house_id}`;
        const [isHousePresent] = await provider.promise().query(query);

        if (!isHousePresent.length) {
            throw new Error(`House with ID ${house_id} doesn't exist`)
        }

        req.house = isHousePresent;

        next();
    } catch (e) {
        res.status(400).json(e.message)
    }
}