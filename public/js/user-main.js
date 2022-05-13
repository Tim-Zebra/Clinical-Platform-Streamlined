const loginFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
   const date = document.querySelector('#date').value.trim();
   const start_time = document.querySelector('#time').value.trim();
   const end_time= start_time + 1 ;
   var pname = document.querySelector('#pname').value.trim();
   var dname = document.querySelector('#dname').value.trim();
console.log (pname);

if (pname === "Roger") {
    user_id = 1;
}

if (pname = "Zoot") {
    user_id= 2;
}
else {user_id = 3};

if (dname = "Arthur") {
    admin_id = 1;
} else {admin_id = 2};

//    const user_id = 1;
//    const admin_id = 1;
  
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
  .querySelector('.dog')
  .addEventListener('submit', loginFormHandler);