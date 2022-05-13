// Form for user login
const userFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const email = document.querySelector('#user-email-login').value.trim();
  const password = document.querySelector('#user-password-login').value.trim();

  console.log (email);
  console.log (password);

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
      alert("Login not succesful");
    }
  }
};

// Form for admin login
const adminFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const email = document.querySelector('#admin-email-login').value.trim();
  const password = document.querySelector('#admin-password-login').value.trim();

  console.log (email);
  console.log (password);

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
      alert("Wrong email or password!");
    }
  }
};

document
  .querySelector('.login-form-user')
  .addEventListener('submit', userFormHandler);

document
  .querySelector('.login-form-user')
  .addEventListener('submit', adminFormHandler);


