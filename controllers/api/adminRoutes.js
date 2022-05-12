const router = require('express').Router();
const { Admin } = require('../../models');

// Routing end point "api/admin"

// router.post('/', async (req, res) => {
//   try {
//     const userData = await Admin.create(req.body);

//     req.session.save(() => {
//       req.session.user_id = userData.id;
//       req.session.logged_in = true;

//       res.status(200).json(userData);
//     });
//   } catch (err) {
//     res.status().json(err);
//   }
// });

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

    req.session.admin_id = userData.id;
    req.session.admin_logged_in = true;
console.log('\x1b[36m', '\n\n----------------This happended-------------------\n\n', req.session.admin_id , req.session.admin_logged_in, '\x1b[37m');
    req.session.save(() => {
      req.session.admin_id = userData.id;
      req.session.admin_logged_in = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.admin_logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
