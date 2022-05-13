const router = require('express').Router();
const { User, Appointment, Admin } = require('../../models');
var bcrypt = require('bcrypt');
const withAuthUser = require('../../utils/auth');
const helper = require('../../utils/helpers');

// Routing end point "api/users"

// User login
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.password === req.body.password;

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.user_logged_in = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// Add an appointment to the database
router.post('/createAppt', async (req, res) => {
  try {
    const newAppt = await Appointment.create({
      date: req.body.date,
      start_time: req.body.start_time,
      end_time: req.body.end_time,
      cost: helper.random_cost(),
      user_id: req.body.user_id,
      admin_id: req.body.admin_id
    });

    res.json(newAppt);

  } catch (err) {
    res.status(500).json(err);
  }
});

// Update an appointment in the database
router.put('/updateAppt', async (req, res) => {
  try {
    const [affectedRows] = await Appointment.update(req.body, {
      where: {
        id: req.body.id,
      },
    });

    if (affectedRows > 0) {
      res.status(200).end();
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete and appointment in the database
router.delete('/deleteAppt', async (req, res) => {
  try {
    const [affectedRows] = await Appointment.destroy({
      where: {
      },
    });

    if (affectedRows > 0) {
      res.status(200).end();
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// Can re-enable if landing page changes. Currently landing pages destroys session
// router.post('/logout', (req, res) => {
//   if (req.session.user_logged_in) {
//     req.session.destroy(() => {
//       res.status(204).end();
//     });
//   } else {
//     res.status(404).end();
//   }
// });

module.exports = router;
