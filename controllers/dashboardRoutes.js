const router = require('express').Router();
const { User, Admin, Appointment } = require('../models/');

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

// Test Code View Dashboard for specific Admin
router.get('/admin/:id', async (req, res) => {

  try {
    const adminData = await Admin.findByPk(req.params.id, {
      // include: [
      //   { 
      //     model: User,
      //     attributes: ['name'],
      //   },
      //   {
      //     model: Appointment,
      //     attributes: ['date', 'cost'],
      //   },
      // ],
    });

    // Gets data for single admin
    const admin = adminData.get({ plain: true });
console.log('\x1b[36m', '\n\n----------------Dashboard Route Admin-------------------\n\n', admin, '\x1b[37m');
    // Passes post and session status to mustache
    res.render('admin-main', {
      layout: 'dashboard',
      // logged_in: req.session.loggedIn
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;