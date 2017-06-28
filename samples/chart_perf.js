var numTraces = 20; // 10
var numCats = 25; // 15
var initialUpdates = 15; // 5

var catBaseName = "THIS_IS_A_VERY_VERY_VERY_VERY_VERY_VERY_LONG_CATEGORY_BASE_NAME";
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
    // xaxis: {
    //   showticklabels: false
    // },
    // yaxis: {
    //   showticklabels: false
    // }
  };
  plotDiv = document.getElementById('myDiv');

  Plotly.newPlot(plotDiv, traces, layout, {displayModeBar: false});
  updateData();

  plotDiv.addEventListener('click', function () {
    updateData();
  }, true);
}


function handleTheClick() {
  window.event.target.innerHTML = "";
  generateChart();
  clearHandle = window.setInterval(function () {
    if (timesUpdated < initialUpdates) {
      updateData();
    } else {
      window.clearInterval(clearHandle);
      // plotDiv.innerHTML = "<h1 style='position: absolute; top: 50%; left: 50%; font-size: 100px; transform: translate(-50%, -50%);'>COMPLETED</h1>";
    }
  }, interval);
}
// document.addEventListener('DOMContentLoaded', function() {
//    generateChart();
// }, false);
