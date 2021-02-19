// getting data from data.js
var tableData = data;

// creating a reference to the table body
var tbody = d3.select("tbody");
// displaiying original table
data.forEach((ufoReport) => {
  var row = tbody.append("tr");
  Object.entries(ufoReport).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});

// selecting the button
var button = d3.select("#filter-btn");
// selecting the form
var form = d3.select("#form");
// creating the event handlers
button.on("click", runFilter);
form.on("submit",runFilter);

// function to run when button is clicked
function runFilter() {
  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // selecting the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");
  // getting the value of the input element
  var inputValue = inputElement.property("value");

  // // logging data to console for debugging
  // console.log(inputValue);
  // console.log(tableData);

  // creating filter for datetime
  var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);

  // // logging filter result for debugging
  // console.log(filteredData);

  // selecting the table to remake it
  var newtbody = d3.select("tbody");
  // removing the old info in the table
  newtbody.html("");
  // re-creating the table with only the filtered info
  filteredData.forEach((ufoReport) => {
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
};
