//Declaring my buttons

var searchBtn = document.querySelector('#searchBtn');

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
