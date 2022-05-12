const { time } = require("console");

const apptFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    const date = document.querySelector('input[type="date"]').value.trim();
    const apptTime = document.querySelector('input[type="time"]').value.trim();
  
    console.log (date);
    console.log (apptTime);
  
//     if (date && apptTime) {
//       // Send a POST request to the API endpoint
//       const response = await fetch('/api/users/login', {
  
//         method: 'POST',
//         body: JSON.stringify({ date, apptTime }),
//         headers: { 'Content-Type': 'application/json' },
//       });
//   console.log(response);
  
//       if (response.ok) {
//         // If successful, redirect the browser to the profile page
//         document.location.replace('/dashboard/user/appointments');
//       } else {
//         alert(response.statusText);
//       }
//     }
  };
  
  document.querySelector('input[type="date"]');
  document.querySelector('input[type="time"]');
  
  document
    .addEventListener('input[type="submit"]', apptFormHandler);
  
  
  