const router = require('express').Router();
const { User, Admin, Appointment } = require('../models/');
const { withAuthUser } = require('../utils/auth');

// The `/dashboard/user` endpoint

// Routes to user at specific ID
router.get('/', withAuthUser, async (req, res) => {
// gets all associated appointment times, and the associated admins with those times
try {
    const userData = await User.findByPk(req.session.user_id, {
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

    const data = userData.get({ plain: true });

    console.log(data);
    // Uncomment to see admin json response in Insomnia
    // res.json(userData);

    // Comment out res.render if sending multiple requests to Insomnia
    // Passes post and session status to mustache
    res.render('user-main', {
      
      layout: 'userdash',
      data,

    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// user schedule route

router.get('/appointments', withAuthUser, async (req, res) => {
  try {
      const adminData = await User.findByPk(req.session.user_id, {
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

      const data = adminData.get({ plain: true });
      
      res.render('user-appointments', {
        layout: 'userdash',
        data,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;
