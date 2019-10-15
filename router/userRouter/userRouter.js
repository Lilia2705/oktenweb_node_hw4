const router = require('express').Router();

let {user} = require('../../controllers');
let {userMiddleware} = require('../../middleware');

router.post('/', userMiddleware.checkUserValidMiddleware, user.createUser);
router.get('/:user_id', userMiddleware.isUserPresentMiddleware, user.getUser);
router.get ('/', user.findAll);


module.exports = router;