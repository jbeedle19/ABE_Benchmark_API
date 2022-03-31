const router = require('express').Router();
const sortRoutes = require('./sortBenchmark');

router.use('/sort', sortRoutes);

module.exports = router;