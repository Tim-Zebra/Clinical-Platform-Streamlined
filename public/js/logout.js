// Redirects to the landing page, which destroys the session upon arrival
const logout = async () => document.location.replace('/');


document
  .getElementById('logout-btn')
  .addEventListener('click', logout);


// Left other info in for scaling app in future (incase we want a different landing page)
  
  // const response = await fetch('/api/users/logout', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  // });

  // if (response.ok) {
  //   alert('You are logged out.');
    // document.location.replace('/');
  // } else {
  //   alert('Failed to log out. No user is logged in.');
  // }
// };

// document.querySelector('#logout').addEventListener('click', logout);