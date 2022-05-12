const router = require('express').Router();
const { User, Appointment, Admin } = require('../models');
const withAuth = require('../utils/auth');

// Renders layouts.main
router.get('/', async (req, res) => {
  if (req.session.admin_logged_in || req.session.user_logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  }
  res.render('homepage')
});


module.exports = router;
