// //random generator API////You can use AJAX to call the Random User Generator API and will receive a randomly generated user in return. If you are using jQuery, you can use the $.ajax() function in the code snippet below to get started.
const container = document.querySelector('.container');
const modalSection = document.querySelector('.modalSection');

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

/////////////////////////////modal/////////////////////////////////
//Get modal element
var modal = document.getElementById('simpleModal');
// Get open modal button
var modalBtn = document.getElementById('modalBtn');
// Get close button
var closeBtn = document.getElementsByClassName('closeBtn')[0];

// Listen for open click
modalBtn.addEventListener('click', openModal);
// Listen for close click
closeBtn.addEventListener('click', closeModal);
// Listen for outside click
window.addEventListener('click', outsideClick);

// Function to open modal
function openModal(){
  modal.style.display = 'block';
}

// Function to close modal
function closeModal(){
  modal.style.display = 'none';
}

// Function to close modal if outside click
function outsideClick(e){
  if(e.target == modal){
    modal.style.display = 'none';
  }
}

/////////////display in modeal////////////////
// Image
// Name
// Email
// Cell Number
// Detailed Address, including street name and number, city, state and post code.
// Birthdate

function directory(employees) {

for (const employee in employees) {

let image = employees[employee].picture.large;
let firstName = employees[employee].name.first;
let lastName = employees[employee].name.last;
let fullName = `${firstName} ${lastName}`;    
let email = employees[employee].email;
let city = employees[employee].location.city;

let streetAddress = employees[employee].location.street;
let state = employees[employee].location.state;
let postCode = employees[employee].location.postcode;
let birthday = employees[employee].dob;
let cell = employees[employee].cell;
let cityStateZip =`${city} , ${state}   ${postCode}`;

modalSection.innerHTML += `
<div id="simpleModal" class="modal" onclick="this.parentNode.style.display='none'">
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
        <p class="b-date">${birthday}</p>
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
`
}
}
 
