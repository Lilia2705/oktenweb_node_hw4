const router = require('express').Router();

let {house} = require('../../controllers');
let {houseMiddleware} = require('../../middleware');

router.post('/houses', houseMiddleware.checkHouseValidMiddleware, house.createHouse);

router.get('/:house_id', houseMiddleware.isHousePresent, house.getHouse);
router.get ('/', house.findAllHouses);
router.patch('/:house_id', houseMiddleware.isHousePresent, house.updateHouse)

module.exports = router;
