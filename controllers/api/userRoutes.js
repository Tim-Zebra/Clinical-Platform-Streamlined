const router = require('express').Router();
const { User } = require('../../models');
var bcrypt = require('bcrypt');
const withAuthUser = require('../../utils/auth');
const randomNum = require('../../utils/helpers');
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
  // test variables
  req.body.date = '04-20-2022';
  req.body.start ='10:00';
  req.body.end ='11:00';
  req.body.cost = 20.53;
  req.body.userId ='04-20-2022';
  req.body.adminId
  
  try {
    const newAppt = await Appointment.create({
      date: req.body.date,
      start_time: req.body.start,
      end_time: req.body.end,
      cost: req.body.cost,
      user_id: req.body.userId,
      admin_id: req.body.adminId
    });

    req.session.save(() => {
      req.session.userId = newUser.id;
      req.session.username = newUser.username;
      req.session.loggedIn = true;

      res.json(newUser);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Update an appointment in the database


// Delete and appointment in the database




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
