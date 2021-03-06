const dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const UserObject = req.body;
        const {user_id} = req.params;
        const UserModel = dataBase.getModel('user');

        await UserModel.update(UserObject, {
            where: {
                user_id: user_id
            }
        });

        res.redirect(`/users/${user_id}`);
    } catch (e) {
        res.json(e.message);
    }
};
