const loginFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
   const date = document.querySelector('#date').value.trim();
   const start_time = document.querySelector('#time2').value.trim();
   const end_time= document.querySelector('#time3').value.trim();
   var pname = document.querySelector('#pname').value.trim();
   var dname = document.querySelector('#dname').value.trim();

if (pname === "Roger") {
    var user_id = 1;
}   else {var user_id=2;}


if (dname === "Arthur") {
    var admin_id = 1;
} else {var admin_id = 2};

  
    if (date && user_id) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/users/createAppt', {
  
        method: 'POST',
        body: JSON.stringify({ date,start_time,end_time,user_id,admin_id }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the profile page
        document.location.replace('/dashboard/user/appointments');
      } else {
        alert("Login not successful, plesese try again.");
      }
    }
  };


  document
  .querySelector('.margin-left-user-main-btn')
  .addEventListener('submit', loginFormHandler);