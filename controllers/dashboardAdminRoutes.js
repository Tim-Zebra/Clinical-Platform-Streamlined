const router = require('express').Router();
const { User, Admin, Appointment } = require('../models/');
const { sequelize } = require('../models/User');

const withAuth = require('../utils/auth');

// The `/dashboard/admin` endpoint

// Leave this for testing purposes. Will use /:id when deploying
router.get('/', async (req, res) => {
     res.render('admin-main', {
       layout: 'dashboard',
     });
});


// Routes to admin at specific ID
router.get('/:id', async (req, res) => {
// gets all associated users (patients), as well as associated appointment times.
try {
    // const apptData = await Appointment.findAll({
    //   where: {admin_id: req.params.id},
    //   include: [
    //     {
    //       model: Admin,
    //       // required: true,

    //       // attributes: {
    //       //   exclude: ['email', 'password'],
    //       // },
    //     },
    //     {
    //       model: User,
    //       // attributes: {
    //       //   exclude: ['email', 'password'],
    //       // },
    //     }
    //   ],
    // });

    const apptData = await Admin.findByPk(req.params.id, {
      attributes: {
        exclude: ['email', 'password'],
      },
      include: [
        {
          model: Appointment,
          include: {
            model: User
          },
          // required: true,
          // attributes: {
          //   exclude: ['email', 'password'],
          // },
        },
      ],
    });

    // Gets data for single admin
    // const appt = apptData.get({ plain: true });
    // console.log('\x1b[36m', '\n\n----------------APTTTTed-------------------\n\n', appt, '\x1b[37m');
    // Uncomment to see admin json response in Insomnia
    res.json(apptData);

    // Comment out res.render if sending multiple requests to Insomnia
    // Passes post and session status to mustache
    // res.render('admin-main', {
    //   layout: 'dashboard',
    //   appt,
    //   // logged_in: req.session.loggedIn
    // });
  } catch (err) {
    res.status(500).json(err);
  }
});



module.exports = router;