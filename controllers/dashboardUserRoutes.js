const router = require('express').Router();
const { User, Admin, Appointment } = require('../models/');
const withAuth = require('../utils/auth');

// The `/dashboard/user` endpoint

// Leave this for testing purposes. Will use /:id when deploying
router.get('/', async (req, res) => {
  res.render('user-main', {
    layout: 'dashboard',
  });
});

// Routes to user at specific ID
router.get('/:id', async (req, res) => {
// gets all associated appointment times, and the associated admins with those times
try {
    const userData = await User.findByPk(req.params.id, {
      attributes: {
        exclude: ['email', 'password'],
      },
      include: [
        {
          model: Appointment,
          include: {
            model: Admin,
              attributes: {
                exclude: ['email', 'password'],
              },
          },
        },
      ],
    });

    // Uncomment to see admin json response in Insomnia
    // res.json(userData);

    // Comment out res.render if sending multiple requests to Insomnia
    // Passes post and session status to mustache
    res.render('user-main', {
      layout: 'dashboard',
      userData,
      // logged_in: req.session.loggedIn
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;