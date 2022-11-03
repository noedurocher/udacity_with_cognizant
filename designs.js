// Select color input
let color = document.getElementById("colorPicker")
let newColor = "";

color.addEventListener("change", function(event) {
    newColor = event.target.value;
});

// Select size input
let height = document.querySelector("#inputHeight");
let width = document.querySelector("#inputWidth");
let newHeight = 0, newWidth=0;

height.addEventListener("change", (event)=>{
	newHeight = event.target.value
});

width.addEventListener("change", (event)=>{
	newWidth = event.target.value
});

//Select submit button
let submitButton = document.querySelector("input[type=submit]");

// When size is submitted by the user, call makeGrid()
function makeGrid() {

// Your code goes here!
	var table = document.getElementById("pixelCanvas");
    var tableBody = document.createElement('TBODY');
    const body = document.querySelector("body")

    if(table.firstChild){
    	table.firstChild.remove()
    }

    for (var i=0; i<newHeight; i++){
       var tr = document.createElement('TR');
       
       
       for (var j=0; j<newWidth; j++){
           var td = document.createElement('TD');
           td.width='75';
           tr.appendChild(td);
       }
       tableBody.appendChild(tr);
       
    }

    table.appendChild(tableBody)
    body.appendChild(table);

    let table_data = document.getElementsByTagName("td")

    for(let i=0; i<table_data.length; i++){
    	table_data[i].onclick = function(){
    		this.style.backgroundColor = newColor;
    	}
    }
   
}

//Event to keep table on screen
const form = document.getElementById("sizePicker");
form.addEventListener("submit", function(event) {
    event.preventDefault();
});

submitButton.addEventListener("click", makeGrid, false);
