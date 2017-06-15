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
var searchButton = document.querySelector('#searchBtn')

//elements for the modal box
var findModal = document.querySelector('#findModal');
var findModalData = document.querySelector('.data');

var detailsModal = document.querySelector('#detailsModal');
var addModal = document.querySelector('#addModal');
var saveFeed = document.querySelector('.saveFeed');

// Get the button that opens the modal
var AddBtn = document.querySelector("#addBtn");
var FindBtn = document.querySelector("#findBtn");

//Declaring the modal close button
closeFind = document.querySelector('.closeFindBtn');
closeDetail = document.querySelector('.closeDetailsBtn');

var span = document.querySelector(".close");

function addReview() {


    var nameValue = custName.value;
    var ageValue = custAge.value;
    var occValue = custOcc.value;
    var question1Value = custQuestion1.value;
    var question2Value = custQuestion2.value;
    var question3Value = custQuestion3.value;
    var video = custName.value;

// if (nameValue !== '' && ageValue !== '' && occValue !== '' &&
    //     question1Value !== '' && question2Value !== '' && question3Value !== '') {} else {
    //
    //     // alert("Please enter text on missing field(s)");
    // }
    var review = {
      nameValue,
      ageValue,
      occValue,
      question1Value,
      question2Value,
      question3Value,
      }

    storeReview(review);

    // if (nameValue !== '' && ageValue !== '' && occValue !== '' &&
    //     question1Value !== '' && question2Value !== '' && question3Value !== '') {} else {
    //
    //     // alert("Please enter text on missing field(s)");
    // }
  // reviews
}

function getStoredReviews(){
  var reviews = [];
  var storedReviews = localStorage['reviews'];
  if (storedReviews !== undefined){
    reviews = JSON.parse(storedReviews)
  }
  return reviews;
}

function storeReview(review){
  var reviews = getStoredReviews();
  reviews.push(review);

  localStorage['reviews'] = JSON.stringify(reviews);

}

// When the user clicks on the button, open the modal
AddBtn.onclick = function() {
    addModal.style.display = "block";
}

// When the user clicks on the button, open the modal
FindBtn.onclick = function() {
  findModal.style.display = "block";

  console.log(getStoredReviews());

  var custDataHtml = customerTemplate({custData : getStoredReviews()})

  findModalData.innerHTML = custDataHtml;

}

// var DisplayBtn = document.querySelector("#searchBtn");
// // When the user clicks on the button, open the modal
// DisplayBtn.onclick = function() {
//     findModal.style.display = "block";
//
//     console.log(getStoredReviews());
//
//     var custDataHtml = customerTemplate({custData : getStoredReviews()})
//
//     detailsModal.innerHTML = custDataHtml;
// }

span.onclick = function() {
  addModal.style.display = "none";
  findModal.style.display = "none";
  detailsModal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == addModal) {
      addModal.style.display = "none";
  }
  //  if (event.target == findModal) {
  //     findModal.style.display = "none";
  // }
  // if (event.target == detailsModal) {
  //     detailsModal.style.display = "none";
  // }
}


var closeFindButton = function(){
 findModal.close();
}

//closeFind.addEventListener('click', closeFindButton);
addReviewBtn.addEventListener('click', addReview);
