const logout = async () => {
// Redirects to the landing page, which destroys the session upon arrival
document.location.replace('/');


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
};

// document.querySelector('#logout').addEventListener('click', logout);