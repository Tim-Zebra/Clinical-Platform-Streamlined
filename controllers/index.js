const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const dashboardAdminRoutes = require('./dashboardAdminRoutes.js');
const dashboardUserRoutes = require('./dashboardUserRoutes.js');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;