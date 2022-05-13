// Redirects to the landing page, which destroys the session upon arrival
const logout = async () => document.location.replace('/');

document
  .querySelector(".logout-btn")
  .addEventListener('click', logout);