const router = require('express').Router();
const { User, Admin, Appointment } = require('../models/');
const { withAuthAdmin } = require('../utils/auth');

// The `/dashboard/admin` endpoint

// Routes to admin at specific ID
router.get('/', withAuthAdmin, async (req, res) => {
// gets all associated appointment times, and the associated users with those times
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

    const data = adminData.get({ plain: true });
console.log(data);

    // Uncomment to see admin json response in Insomnia
    // res.json(adminData);

    // Uncomment out res.render if sending multiple requests to Insomnia
    // Passes post and session status to mustache
    res.render('admin-main', {
      layout: 'dashboard',
      data,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/appointments', withAuthAdmin, async (req, res) => {
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

      const data = adminData.get({ plain: true });

      res.render('admin-appointments', {
        layout: 'dashboard',
        data,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
router.get('/patients', withAuthAdmin, async (req, res) => {
  try {
      const adminData = await Admin.findByPk(1, {
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

      console.log('\x1b[36m', '\n\n----------------This happended-------------------\n\n', adminData, '\x1b[37m');

      res.render('admin-patients', {
        layout: 'dashboard',
        adminData,
      });
  } catch (err) {
    res.status(500).json(err);
  }
  });
  
module.exports = router;