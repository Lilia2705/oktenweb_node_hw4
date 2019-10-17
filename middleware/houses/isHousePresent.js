const dataBase = require ('../../dataBase').getInstance();
module.exports = async (req, res, next) => {
    try {
        const {house_id} = req.params;
        const housesModel = dataBase.getModel('house');

        const isHousePresent = await housesModel.findByPk(house_id);

        if (!isHousePresent) {
            throw new Error(`House with ID ${house_id} doesn't exist`)
        }

        req.house = isHousePresent;

        next();
    } catch (e) {
        res.status(400).json(e.message)
    }
}
