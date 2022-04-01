const Router = require('express');
const router = new Router();
const itemRouter = require('./itemRouter');
const categoryRouter = require('./categoryRouter');
const userRouter = require('./userRouter');


router.use('/user', userRouter);
router.use('/category', categoryRouter);
router.use('/item', itemRouter);


module.exports = router;