// Select color input
// Select size input

var inputHeight = document.getElementById('inputHeight').value;
var inputWidth = document.getElementById('inputWidth').value;

// When size is submitted by the user, call makeGrid()

var heady = document.querySelectorAll('h2');
var subForm = document.getElementById('sizePicker');

subForm.addEventListener('submit', function sizeUpdate (event) {
  event.preventDefault();
    inputHeight = document.getElementById('inputHeight').value;
    inputWidth = document.getElementById('inputWidth').value;
});




document.addEventListener('click',function () {
  heady[1].style.background='pink';
});

function makeGrid() {

// Your code goes here!

}
