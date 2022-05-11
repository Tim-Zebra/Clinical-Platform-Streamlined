const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const dashboardAdminRoutes = require('./dashboardAdminRoutes.js');

router.use('/', homeRoutes);
router.use('/dashboard/admin', dashboardAdminRoutes);
router.use('/api', apiRoutes);

module.exports = router;