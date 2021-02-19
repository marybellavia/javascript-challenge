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
  var inputDate = d3.select("#datetime").property("value");
  var inputCity = d3.select("#city").property("value");
  var inputState = d3.select("#state").property("value");
  var inputCountry = d3.select("#country").property("value");
  var inputShape = d3.select("#shape").property("value");

  console.log(inputDate)
  if (inputDate !== "") {
      console.log("negative!");
  }
  else if (inputCity !== "") {
      console.log("success!");
  }
  else if (inputState !== "") {
      console.log("success!");
  }
  else if (inputCountry !== "") {
      console.log("success!");
  }
  else if (inputShape !== "") {
      console.log("success!");
  }
  // // logging data to console for debugging
  // console.log(inputValue);
  // console.log(tableData);

  // creating filter for datetime
  var filteredData = tableData.filter(tableData => tableData.datetime === inputDate);

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

