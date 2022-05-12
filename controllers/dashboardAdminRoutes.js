const router = require('express').Router();
const { User, Admin, Appointment } = require('../models/');
const { withAuthAdmin } = require('../utils/auth');

// The `/dashboard/admin` endpoint

// Routes to admin at specific ID
router.get('/', withAuthAdmin, async (req, res) => {
// gets all associated appointment times, and the associated users with those times
req.session.admin_id = 2;
try {
    const adminData = await Admin.findByPk(req.session.admin_id, {
      attributes: {
        exclude: ['email', 'password'],
      },
      include: [
        {
          model: Appointment,
          include: {
            model: User,
              attributes: {
                exclude: ['email', 'password'],
              },
          },
        },
      ],
    });

    // Uncomment to see admin json response in Insomnia
    res.json(adminData);

    // Comment out res.render if sending multiple requests to Insomnia
    // Passes post and session status to mustache
    // res.render('admin-main', {
    //   layout: 'dashboard',
    //   adminData,
    //   // logged_in: req.session.loggedIn
    // });
  } catch (err) {
    res.status(500).json(err);
  }
});



module.exports = router;