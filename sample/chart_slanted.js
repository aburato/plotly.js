var numTraces = 2; // 10
var numCats = 5; // 15

var catBaseName = "A_CATEGORY_NAME_WHICH_IS_LONG";
var yMin = -100;
var yMax = 100;
var plotDiv;
var timesUpdated = 0;
var interval = 1000;
var clearHandle;

// Categories and indices are the same for everyone
var categories = [];
for (var c = 1; c <= numCats; c++) {
  categories.push(c + "_" + catBaseName + "_" + c);
}
var updatedIndices = [];
for (var t = 0; t < numTraces; t++) {
  updatedIndices.push(t);
};

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
  for (var t = 1; t <= numTraces; t++) {
    var trace = {
      type: 'bar',
      x: categories,
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
    hovermode: 'closest',
    margin: {
      l: 5,
      r: 5,
      t: 5,
      b: 5
    },
    showlegend: true 
  };
  plotDiv = document.getElementById('myDiv');

  Plotly.newPlot(plotDiv, traces, layout, {displayModeBar: false});
  updateData();

  plotDiv.addEventListener('click', function () {
    updateData();
  }, true);
}

document.addEventListener('DOMContentLoaded', function() {
   generateChart();
}, false);
