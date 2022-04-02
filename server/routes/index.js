const Router = require('express');
const itemRouter = require('./itemRouter');
const categoryRouter = require('./categoryRouter');
const categoryGroupRouter = require('./categoryGroupRouter');
const userRouter = require('./userRouter');
const router = new Router();


router.use('/user', userRouter);
router.use('/category', categoryRouter);
router.use('/category_group', categoryGroupRouter);
router.use('/item', itemRouter);


module.exports = router;