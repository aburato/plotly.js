var numTraces = 10;
var numCats = 15;
var yMin = -100;
var yMax = 100;
var plotDiv;
var updatedIndices = [];
for (var t = 0; t < numTraces; t++) {
  updatedIndices.push(t);
};
var timesUpdated = 0;
var initialUpdates = 5;
var interval = 1000;
var clearHandle;

function updateData() {
  var updatedData = {
    y: []
  };

  for (var t = 0; t < numTraces; t++) {
    var yValues = [];
    for (var v = 0; v < numCats; v++) {
      var val = yMin + Math.random() * (yMax - yMin);
      yValues.push(val);
    }
    updatedData.y.push(yValues);
  }

  Plotly.restyle(plotDiv, updatedData, updatedIndices);

  timesUpdated++;
}

function generateChart() {

  var traces = [];
  var cats = [];
  // Categories are the same for everyone
  for (var c = 1; c <= numCats; c++) {
    cats.push("CAT_" + c);
  }

  for (var t = 1; t <= numTraces; t++) {
    var trace = {
      type: 'bar',
      x: cats,
      y: [],
      name: "Trace " + t
    }
    for (var v = 0; v < numCats; v++) {
      trace.y.push((yMin + yMax) / 2);
    }
    traces.push(trace);
  }

  var layout = {
    barmode: 'group',
    hovermode: 'closest'
  };
  plotDiv = document.getElementById('myDiv');

  Plotly.newPlot(plotDiv, traces, layout);
  updateData();

  plotDiv.addEventListener('plotly_click', function () {
    updateData();
  }, false);
}


function handleTheClick() {
  generateChart();
  clearHandle = window.setInterval(function() {
    if (timesUpdated < initialUpdates) {
      updateData();
    } else {
      window.clearInterval(clearHandle);
    }
  }, interval);
}
// document.addEventListener('DOMContentLoaded', function() {
//    generateChart();
// }, false);
