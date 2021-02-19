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
      var noResults = d3.select("#no-result");
      noResults.html("");  
      // creating filter for datetime
      var filteredData = tableData.filter(tableData => tableData.datetime === inputDate);
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
  }
  else if (inputCity !== "") {
      var noResults = d3.select("#no-result");
      noResults.html("");
      // creating filter for datetime
      var filteredData = tableData.filter(tableData => tableData.city === (inputCity.toLowerCase()));
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
  }
  else if (inputState !== "") {
      var noResults = d3.select("#no-result");
      noResults.html("");
      // creating filter for datetime
      var filteredData = tableData.filter(tableData => tableData.state === (inputState.toLowerCase()));
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
  }
  else if (inputCountry !== "") {
      var noResults = d3.select("#no-result");
      noResults.html("");
      // creating filter for datetime
      var filteredData = tableData.filter(tableData => tableData.country === (inputCountry.toLowerCase()));
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
  }
  else if (inputShape !== "") {
      var noResults = d3.select("#no-result");
      noResults.html("");
      // creating filter for datetime
      var filteredData = tableData.filter(tableData => tableData.shape === (inputShape.toLowerCase()));
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
  }
  else {
      var newtbody = d3.select("tbody");
      // removing the old info in the table
      newtbody.html("");
      var noResults = d3.select("#no-result");
      noResults.append("h1").text("No search results, try again!");
  }
};

