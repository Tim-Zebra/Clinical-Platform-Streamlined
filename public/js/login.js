const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const email = document.querySelector('#user-email-login').value.trim();
  const password = document.querySelector('#user-password-login').value.trim();

  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/users/login', {

      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace('/dashboard/user');
    } else {
      alert("Login not successful, plesese try again.");
    }
  }
};

const adminFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const email = document.querySelector('#admin-email-login').value.trim();
  const password = document.querySelector('#admin-password-login').value.trim();

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
  .querySelector('#patient-login')
  .addEventListener('submit', loginFormHandler);

document
  .querySelector('.cat')
  .addEventListener('submit', adminFormHandler);


