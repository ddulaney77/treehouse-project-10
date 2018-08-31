// //random generator API////You can use AJAX to call the Random User Generator API and will receive a randomly generated user in return. If you are using jQuery, you can use the $.ajax() function in the code snippet below to get started.
const container = document.querySelector('.container');
const modalSection = document.querySelector('.modalSection');
let employees;

$.ajax({
  url: 'https://randomuser.me/api/?results=12&nat=us',
  dataType: 'json',
  success: function(data) {
    employees = data.results;
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
    `;
  }


// Get input element
let filterInput = document.getElementById('search');
// Add event listener
filterInput.addEventListener('keyup', filterNames);

function filterNames(){
  // Get value of input
  const employeeBox = document.querySelectorAll('.box');
  let filterValue = filterInput.value.toUpperCase();
  let employeeNames = document.querySelectorAll('.name');

  // // Get lis from ul
  employeeNames.forEach((name, index) => {
   if(name.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
     employeeBox[index].style.display = "grid";
   } else {
    employeeBox[index].style.display = "none";
   }
  });

  // // Loop through collection-item lis
  // for(let i = 0;i < li.length;i++){
  //   let a = li[i].getElementsByTagName('a')[0];
  //   // If matched
  //   if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1){
  //     li[i].style.display = '';
  //   } else {
  //     li[i].style.display = 'none';
  //   }
  // }

}


  const employeeBox = document.querySelectorAll('.box');
  employeeBox.forEach((box, index) => {
    box.addEventListener('click',  function(){
      modalSection.style.display = "block";
      buildModal(employees[index], index);
    });
  });
 
  


  }


function buildModal(employee, index) {
let image = employee.picture.large;
let firstName = employee.name.first;
let lastName = employee.name.last;
let fullName = `${firstName} ${lastName}`;    
let email = employee.email;
let city = employee.location.city;

let streetAddress = employee.location.street;
let state = employee.location.state;
let postCode = employee.location.postcode;
let dateOfBirth = new Date(Date.parse(employee.dob.date)).toLocaleDateString();
let cell = employee.cell;
let cityStateZip =`${city} , ${state}   ${postCode}`;

modalSection.innerHTML = `
<div id="simpleModal" class="modal">
 <div class="modal-content">
  <div class="modal-header">
      <span class="closeBtn">&times;</span>
       <h2>Employee Information</h2>
   </div>

   <div class="modal-body">
     <div class="modal-image">
         <img src="${image}">
         </div>
    </div>
     <div class="modal-info">
      <H2>${fullName}</H2>
      <p class="email">${email}</p>
         <p class="cellPhone">${cell}</p>
       <p class="street-address">${streetAddress}</p>
          <p class="city">${cityStateZip}</p>         
        <span id="date">${dateOfBirth}</span>
   </div>
 <div class="back">
    <p>&#60</p>
    </div>
   <div class="forward">
      <p>&#62</p>
    </div>
 </div>    
 </div>
 </section> 
`;

 
// /////////////////////////////modal/////////////////////////////////
//Get modal element
const modal = document.getElementById('simpleModal');
// Get open modal button

// Get close button
const closeBtn = document.getElementsByClassName('closeBtn')[0];
const forward = document.querySelector('.forward');
const back = document.querySelector('.back');
const arrayLength = (employees.length -1);
// // Listen for open click


forward.addEventListener('click', function(){

  if(index < arrayLength){
    buildModal(employees[index + 1], index + 1);
  } else {
    buildModal(employees[0], 0);
  }

});

back.addEventListener('click', function(){
  if(index > 0) {
  buildModal(employees[index - 1], index - 1);
  } else {
    buildModal(employees[arrayLength], arrayLength);
  }
});

// // Listen for close click
closeBtn.addEventListener('click', closeModal);
//
 // Listen for outside click
window.addEventListener('click', outsideClick);


// Function to close modal
function closeModal(){
  modalSection.style.display = 'none';
}

// Function to close modal if outside click
function outsideClick(e){
  if(e.target === modal){
    modal.style.display = 'none';
  }
}
}