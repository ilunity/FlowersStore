const Router = require('express');
const router = new Router();
const categoryGroupController = require('../controllers/categoryGroupController');


router.post('/', categoryGroupController.create);
router.get('/', categoryGroupController.getAll);


module.exports = router;