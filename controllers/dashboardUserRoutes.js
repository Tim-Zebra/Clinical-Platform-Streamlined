const router = require('express').Router();
const { User, Admin, Appointment } = require('../models/');
const withAuth = require('../utils/auth');

// The `/dashboard/user` endpoint

router.get('/', async (req, res) => {
  res.render('user-main', {
    layout: 'dashboard',
  });
});

// Test Code View Dashboard for specific Admin
router.get('/:id', async (req, res) => {
// gets the appointment time with the associated user
  try {
    const apptData = await Appointment.findByPk(req.params.id, {
      include: [
        {
          model: Admin,
          attributes: {
            exclude: ['email', 'password'],
          },
        },
        {
          model: User,
          attributes: {
            exclude: ['email', 'password'],
          },
        }
      ],
    });

    const appt = apptData.get({ plain: true });
   
    // Uncomment to see admin json response in Insomnia
    res.json(appt);

    // Comment out res.render if sending multiple requests to Insomnia
    // Passes post and session status to mustache
    // res.render('user-main', {
    //   layout: 'dashboard',
    //   appt,
    //   // logged_in: req.session.loggedIn
    // });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;