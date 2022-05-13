var stop = false;

var apptFormHandler = async (event) => {
  if (stop === true) {
    stop = false;
    return;
  }  else {
    stop = true;
  }
  event.preventDefault();
    // Collect values from the login form
   const date = document.querySelector('#date').value.trim();
   const start_time = document.querySelector('#time2').value.trim();
   const end_time= document.querySelector('#time3').value.trim();
   var dname = document.querySelector('#dname').value.trim();

if (dname === "Arthur") {
    var admin_id = 1;
} else {var admin_id = 2};

  
    if (date && start_time && end_time) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/users/createAppt', {
  
        method: 'POST',
        body: JSON.stringify({ date,start_time,end_time, admin_id }),
        headers: { 'Content-Type': 'application/json' },
      });
console.log('\x1b[36m', '\n\n----------------This happended-------------------\n\n', '\x1b[37m');
      if (response.ok) {
        // If successful, redirect the browser to the profile page
        document.location.replace('/dashboard/user/Appointments');
      } else {
        alert("Login not successful, plesese try again.");
      }
    }
  };


  document
  .querySelector('.sbmt')
  .addEventListener('submit', apptFormHandler);