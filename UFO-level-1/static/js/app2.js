
// ======== Part 1: Get UFO data from data.js ======== 
//from data.js
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
var input=d3.select("input");
var button = d3.selectAll(".filter");
new_dictionary={}

// Select the form
// var form = d3.select("#form-control");

// Create event handlers 
button.on("change", runEnter);
// form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {
console.log("runEnter start:",this);

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  var inputElement = d3.select(this).select("input");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");
  var inputid = inputElement.attr("id");

//dictionary for search criteria for value and ID
  new_dictionary[inputid]=inputValue

  console.log(inputValue);

//   var filteredData = data.filter(data_dict => data_dict.datetime === inputValue);
 
  console.log(new_dictionary);
  createNewTable()

}
//create table and filter data 
function createNewTable() {
    var new_table=tableData
    console.log(new_table)
    Object.entries(new_dictionary).forEach(function([key,value]){
        new_table=new_table.filter(x => x[key] === value);
        console.log(new_table)
    })
// ======== Part 3: Populate Filtered Data Table ======== 
    var tbody=d3.select("tbody")
    tbody.html("")

    new_table.forEach(function(print_filter_data) {
    console.log(UFO_data);
    var row = tbody.append("tr");
    Object.entries(print_filter_data).forEach(([key, value]) => {
        console.log(key,value);
        var cell = row.append("td");
        cell.text(value);
    });
});



}





