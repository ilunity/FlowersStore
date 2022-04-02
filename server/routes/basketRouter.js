const Router = require('express');
const basketController = require('../controllers/basketController');
const router = new Router();

router.post('/addItem', basketController.addItem);
router.get('/', basketController.getItems);

module.exports = router;