// //random generator API////You can use AJAX to call the Random User Generator API and will receive a randomly generated user in return. If you are using jQuery, you can use the $.ajax() function in the code snippet below to get started.
const container = document.querySelector('.container');


$.ajax({
  url: 'https://randomuser.me/api/?results=12&nat=us',
  dataType: 'json',
  success: function(data) {
    const employees = data.results;
    directory(employees);
  }
});
 
function directory(employees) {
  
  for (const employee in employees) {
    let image = employees[employee].picture.large;
    let firstName = employees[employee].name.first;
    let lastName = employees[employee].name.last;
    let fullName = `${firstName} ${lastName}`;    
    let email = employees[employee].email;
    let city = employees[employee].location.city;

    container.innerHTML += `
    <div class="box">
      
      <div class="image-box">
        <li class="employee-image">
          <img src="${image}" alt="employee picture"> 
       </div>
       <div class="info-box">
          <li class="employee-info">
            <h3 class="name">${fullName}</h3>
            <p class="email">${email}</p>
            <p class="city">${city}</P>
          </li>
        </div>
      

    </div>
    `
  }
  }


/*




/
// /*Including/Excluding fields
// Sometimes, maybe you want some random names and not extraneous data such as location, phone, etc.
// Using the inc and exc parameters, you can specify which fields to include or exclude respectively.

// By specifying only the fields you want, the generator can save time by skipping CPU intensive fields like "login" for example.

// These parameters accept the following values in a comma delimited list

// gender       //use this
// name         // use this
// location     // use this
// email        // use this
// login
// registered
// dob          //use this
// phone        //use this
// cell
// id
// picture      //use this
// nat          // use this? 

// If you only wanted the names,genders,and nats of users:
// https://randomuser.me/api/?inc=gender,name,nat.location,email,dob,phone,picture


// If you want everything except for login data:
// https://randomuser.me/api/?exc=login,registered,cell,id
// */




/////////////////////////////modal/////////////////////////////////
// Get modal element
// var modal = document.getElementById('simpleModal');
// // Get open modal button
// var modalBtn = document.getElementById('modalBtn');
// // Get close button
// var closeBtn = document.getElementsByClassName('closeBtn')[0];

// // Listen for open click
// modalBtn.addEventListener('click', openModal);
// // Listen for close click
// closeBtn.addEventListener('click', closeModal);
// // Listen for outside click
// window.addEventListener('click', outsideClick);

// // Function to open modal
// function openModal(){
//   modal.style.display = 'block';
// }

// // Function to close modal
// function closeModal(){
//   modal.style.display = 'none';
// }

// // Function to close modal if outside click
// function outsideClick(e){
//   if(e.target == modal){
//     modal.style.display = 'none';
//   }
// }



