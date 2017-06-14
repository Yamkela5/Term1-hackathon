//declaring my textbox classes
var nameTextBox = document.querySelector('.addName');
var ageTextBox = document.querySelector('.addAge');
var occTextBox = document.querySelector('.addOcc');
var question1TextBox = document.querySelector('.question1');
var question2TextBox = document.querySelector('.question2');
var question3TextBox = document.querySelector('.question3');

//declaring my textbox classes
var custName = document.querySelector('.addName');
var custAge = document.querySelector('.addAge');
var custOcc = document.querySelector('.addOcc');
var custQuestion1 = document.querySelector('.question1');
var custQuestion2 = document.querySelector('.question2');
var custQuestion3 = document.querySelector('.question3');
var video = document.querySelector('#video');

//Declaring my buttons
var searchBtn = document.querySelector('#searchBtn');
var addReviewBtn = document.querySelector('.addReview');

//Display data on program load
var searchTempText = document.querySelector('.searchTemp').innerHTML;
var customerTempText = document.querySelector('.customerTemp').innerHTML;

//for template compile
var searchTemplate = Handlebars.compile(searchTempText);
var customerTemplate = Handlebars.compile(customerTempText);

//targets the div on the html file
var addListElem = document.querySelector('#add');
var displayListElem = document.querySelector('#display');
var findListElem = document.querySelector('#find');
var searchListElem = document.querySelector('#search');

//elements for the modal box
var findModal = document.querySelector('#findModal');
var detailsModal = document.querySelector('#detailsModal');
var addModal = document.querySelector('#addModal');

// Get the button that opens the modal
var AddBtn = document.querySelector("#addBtn");
var FindBtn = document.querySelector("#findBtn");
var DisplayBtn = document.querySelector("#displayBtn");

// Get the <span> element that closes the modal
var span = document.querySelector(".close")[0];

function addReview(){


  var nameValue = custName.value;
  var ageValue = custAge.value;
  var occValue = custOcc.value;
  var question1Value = custQuestion1.value;
  var question2Value = custQuestion2.value;
  var question3Value = custQuestion3.value;
  var video = custName.value;

  if (nameValue !== '' && ageValue !== '' && occValue !== ''
    && question1Value !== '' && question2Value !== '' && question3Value !== '') {


 }
 else {
  alert("Please enter text on missing field(s)");
}

// When the user clicks on the button, open the modal
AddBtn.onclick = function() {
    addModal.style.display = "block";
}

// When the user clicks on the button, open the modal
FindBtn.onclick = function() {
    findModal.style.display = "block";
}

// When the user clicks on the button, open the modal
DisplayBtn.onclick = function() {
    detailsModal.style.display = "block";
}

addReviewBtn.addEventListener('click', addReview);
