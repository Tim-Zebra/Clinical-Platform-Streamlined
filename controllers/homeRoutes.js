const router = require('express').Router();
const { Scheduler, User } = require('../models');
const withAuth = require('../utils/auth');

// Renders layouts.main
router.get('/', async (req, res) => {
res.render('homepage')
});


module.exports = router;
