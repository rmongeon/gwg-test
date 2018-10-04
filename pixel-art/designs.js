// Select color input
// Select size input

var inputHeight = document.getElementById('inputHeight').value;
var inputWidth = document.getElementById('inputWidth').value;

// When size is submitted by the user, call makeGrid()

var pixelTable = document.getElementById('pixelCanvas');
var subForm = document.getElementById('sizePicker');
var colorPicker = document.getElementById('colorPicker');
var color = colorPicker.value;

subForm.addEventListener('submit', function sizeUpdate (event) {
    event.preventDefault();
    makeGrid();
});

pixelTable.onclick =  function colorCell(event) {
let td = event.target.closest('td');
if (!td) return;
if(!pixelTable.contains(td)) return;

color = colorPicker.value;
td.style.background=color;
};

function makeGrid() {

inputHeight = document.getElementById('inputHeight').value;
inputWidth = document.getElementById('inputWidth').value;

pixelTable.style.border='1px';
pixelTable.innerHTML = "";
var htmlText = "";
for (var i=0;i<inputHeight;i++){
  htmlText += "<tr>";
  for(var j=0;j<inputWidth;j++){
    htmlText += "<td></td>"
  }
  htmlText += "</tr>"
}
pixelTable.innerHTML = htmlText;
}
