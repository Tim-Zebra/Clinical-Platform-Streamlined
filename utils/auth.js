// Allows user to only access their user page when logged in, and can only access their user page
const withAuthUser = (req, res, next) => {
  // If the user is not logged in, redirect the request to the login route
  if (!req.session.user_logged_in) {
    res.redirect('/');
  } else {
    next();
  }
};

// Allows admin to only access their admin page when logged in, and can only access their admin page
const withAuthAdmin = (req, res, next) => {
  // If the user is not logged in, redirect the request to the login route
  if (!req.session.admin_logged_in) {
    res.redirect('/');
  } else {
    next();
  }
};

module.exports = {
  withAuthUser,
  withAuthAdmin,
};
