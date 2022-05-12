const logout = async () => {
  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    alert('You are logged out.');
    document.location.replace('/');
  } else {
    alert('Failed to log out. No user is logged in.');
  }
};

// document.querySelector('#logout').addEventListener('click', logout);