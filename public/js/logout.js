const logout = async () => {
// Redirects to the landing page, which destroys the session upon arrival
document.location.replace('/');

const adminFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const email = document.querySelector('#doctor').value.trim();
  const password = document.querySelector('#date').value.trim();

  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/admin/login', {

      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace('/dashboard/admin');
    } else {
      alert("Login not successful, plesese try again.");
    }
  }
};

document
  .querySelector('.cat')
  .addEventListener('submit', adminFormHandler);


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