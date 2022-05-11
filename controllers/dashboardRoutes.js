const router = require('express').Router();
const withAuth = require('../utils/auth');

// The `/dashboard` endpoint

// View dashboard for user
router.get('/user', async (req, res) => {
  res.render('user-main', {layout: 'dashboard'});
});

// View dashboard for admin
router.get('/admin', async (req, res) => {
  res.render('admin-main', {layout: 'dashboard'});
});

module.exports = router;