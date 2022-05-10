const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./projectRoutes');
const adminRoutes = require('./adminRoutes');

router.use('/users', userRoutes);
router.use('/admin', adminRoutes);
router.use('/projects', projectRoutes);

module.exports = router;
