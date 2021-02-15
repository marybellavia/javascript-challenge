// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// BONUS: Refactor to use Arrow Functions!
data.forEach((ufoReport) => {
  var row = tbody.append("tr");
  Object.entries(ufoReport).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});

