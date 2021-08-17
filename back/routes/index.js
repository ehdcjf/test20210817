const router = require('express').Router();
const mainRouter = require('./main/index');
const requestRouter = require('./request/index');


router.use('/', mainRouter);
router.use('/request', requestRouter);

module.exports = router;