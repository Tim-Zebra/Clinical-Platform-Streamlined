const router = require('express').Router();
const { Pharma,User, Admin, Appointment } = require('../models/');
const { withAuthUser } = require('../utils/auth');

// The `/dashboard/user` endpoint

// Gets user info
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
          order: [['updatedAt', 'DESC']],
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
      const adminData = await User.findByPk(1, {
        attributes: {
          exclude: ['email', 'password'],
        },
        include: [
          {
            model: Appointment,
            order: [['updatedAt', 'DESC']],
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

  router.get('/Prescriptions', withAuthUser, async (req, res) => {
    try {
        const adminData = await Pharma.findByPk(1, {});
        const adminData1 = await Pharma.findByPk(2, {});
        const adminData2 = await Pharma.findByPk(3, {});
        const adminData3= await Pharma.findByPk(4, {});
  
        const data = adminData.get({ plain: true });
        const data1 = adminData1.get({ plain: true });
        const data2 = adminData2.get({ plain: true });
        const data3 = adminData3.get({ plain: true });
        console.log (data1)
        console.log (data2)
        console.log (data3)
        console.log (data)
  
        res.render('pharma-prod', {
          layout: 'userdash',
          data,
          data1,
          data2,
          data3
        });
      } catch (err) {
        res.status(500).json(err);
      }
    });

module.exports = router;

router.get('/accountsummary', withAuthUser, async (req, res) => {
  try {

      res.render('user-acctsummary', {
        layout: 'userdash',
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });
