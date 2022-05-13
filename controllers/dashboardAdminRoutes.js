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
          order: [['updatedAt', 'DESC']],
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

    let filteredPatients = [data.appointments[0].user.name];
    for(let k = 1; k < data.appointments.length; k++ ){
      let duplicate = false;

      for(let i = 0; i < filteredPatients.length; i++) {
        if (filteredPatients[i] === data.appointments[k].user.name) {
          duplicate = true;
        }
      }
      
      if(duplicate === false) {
        filteredPatients.push(data.appointments[k].user.name);
      }
    }

    // Uncomment to see admin json response in Insomnia
    // res.json(adminData);

    // Uncomment out res.render if sending multiple requests to Insomnia
    // Passes post and session status to mustache
    res.render('admin-main', {
      layout: 'dashboard',
      data,
      filteredPatients,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/appointments', async (req, res) => {
  try {
      const adminData = await Admin.findByPk(req.session.admin_id, {
        attributes: {
          exclude: ['email', 'password'],
        },
        include: [
          {
            model: Appointment,
            order: [['updatedAt', 'DESC']],
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
      const adminData = await Admin.findByPk(req.session.admin_id, {
        attributes: {
          exclude: ['email', 'password'],
        },
        include: [
          {
            model: Appointment,
            order: [['updatedAt', 'DESC']],
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

      // removes duplicate patients and places each patient into an array
      let filteredPatients = [data.appointments[0].user.name];
      for(let k = 1; k < data.appointments.length; k++ ){
        let duplicate = false;

        for(let i = 0; i < filteredPatients.length; i++) {
          if (filteredPatients[i] === data.appointments[k].user.name) {
            duplicate = true;
          }
        }
        
        if(duplicate === false) {
          filteredPatients.push(data.appointments[k].user.name);
        }
      }

      res.render('admin-patients', {
        layout: 'dashboard',
        data,
        filteredPatients,
      });
  } catch (err) {
    res.status(500).json(err);
  }
  });
  
module.exports = router;