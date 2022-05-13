const router = require('express').Router();
const { User, Appointment, Admin } = require('../../models');
const withAuthAdmin = require('../../utils/auth');

// Routing end point "api/admin"

// Admin login
router.post('/login', async (req, res) => {
  try {
    const userData = await Admin.findOne({ where: { email: req.body.email } });

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
      req.session.admin_id = userData.id;
      req.session.admin_logged_in = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// Can re-enable if landing page changes. Currently landing pages destroys session
// router.post('/logout', (req, res) => {
//   if (req.session.admin_logged_in) {
//     req.session.destroy(() => {
//       res.status(204).end();
//     });
//   } else {
//     res.status(404).end();
//   }
// });

module.exports = router;
