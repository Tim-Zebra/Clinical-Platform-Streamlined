const router = require('express').Router();
const { User, Admin, Appointment } = require('../models/');
const { sequelize } = require('../models/User');

const withAuth = require('../utils/auth');

// The `/dashboard/admin` endpoint

// // View dashboard for user
// router.get('/user', async (req, res) => {
//   res.render('user-main', {layout: 'dashboard'});
// });

// // View dashboard for admin
// router.get('/admin', async (req, res) => {
//   res.render('admin-main', {layout: 'dashboard'});
// });

// Test Code View Dashboard for specific Admin
router.get('/:id', async (req, res) => {
// gets all associated users (patients), as well as associated appointment times.
  try {
    const adminData = await Admin.findByPk(req.params.id, {
      // excludes unnecessary data
      attributes: {
        exclude: ['email', 'password'],
      },
      // includes user: name, id, appointment cost, appointment date.
      include: [
        {
          model: Appointment,
        },
      ],
    });

    // Gets data for single admin
    const admin = adminData.get({ plain: true });
    // Uncomment to see admin json response in Insomnia
    res.json(admin);

    // Comment out res.render if sending multiple requests to Insomnia
    // Passes post and session status to mustache
    // res.render('admin-main', {
    //   layout: 'dashboard',
    //   // logged_in: req.session.loggedIn
    // });
  } catch (err) {
    res.status(500).json(err);
  }
});



module.exports = router;