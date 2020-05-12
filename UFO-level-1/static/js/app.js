
// ======== Part 1: Get UFO data from data.js ======== 
// from data.js
var tableData = data;

let tbody = d3.select("tbody");

   // loop through UFO data in data.js and append rows 
   data.forEach(function(UFO_data) {
    console.log(UFO_data);
    var row = tbody.append("tr");
    Object.entries(UFO_data).forEach(function([key, value]) {
      console.log(key, value);
      var cell = row.append("td");
      cell.text(value);
    });
  }); 


// ======== Part 2: Button Function and Filter ======== 
// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form-control");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {
console.log("runEnter start:",this);

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);

  var filteredData = data.filter(data_dict => data_dict.datetime === inputValue);

  console.log(filteredData);

}


// ======== Part 3: Populate Filtered Data Table ======== 
filteredData.forEach(function(UFO_data) {
  console.log(UFO_data);
  var row = tbody.append("tr");
  Object.entries(UFO_data).forEach(([key, value]) => {
    console.log(key,value);
    var cell = row.append("td");
    cell.text(value);
  });
});

