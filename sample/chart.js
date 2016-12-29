var trace1 = {
  x: ['A', 'B', 'C'],
  y: [2.5, 1.5, 2],
  type: 'bar',
};
var trace2 = {
  x: ['A', 'B', 'C'],
  y: [-2.5, -1.5, -2],
  type: 'bar',
};
var trace3 = {
  x: ['A', 'B', 'C'],
  y: [0.5, 3.5, 1],
  type: 'bar'
};

var barLayout = {
  barmode: 'group',
  hovermode: 'closest',
  width: 600,
};
var barData = [trace1, trace2, trace3];
Plotly.newPlot('barDiv', barData, barLayout);
var myPlot = document.getElementById('barDiv');
myPlot.on('plotly_click', function (data) {
  var point = data.points[0];
  var singleColors = [];
  var singleWidths = [];
  for (var i = 0; i < barData[0].x.length; i++) {
    if (i === point.pointNumber) {
      singleColors.push('red');
      singleWidths.push(2);
    } else {
      singleColors.push('white');
      singleWidths.push(0);
    }
  }

  var curves = [];
  var colors = [];
  var widths = [];

  for (var j = 0; j < barData.length; j++) {
    curves.push(j);
    var sc = [];
    var sw = [];
    for (var k = 0; k < barData[j].x.length; k++) {
      // single trace
      if (j === point.curveNumber && k === point.pointNumber) {
        sc.push('red');
        sw.push(2);
      } else {
        sc.push(null);
        sw.push(0);
      }
    }
    colors.push(sc);
    widths.push(sw);
  }

  Plotly.restyle('barDiv', {
    'marker.line.color': colors,
    'marker.line.width': widths,
  }, curves);
  console.log(data);
});

var pieData = [{
  sort: false,
  values: [27, 11, 25, 8, 1, 3, 25],
  labels: ['US', 'China', 'European Union', 'Russian Federation', 'Brazil', 'India', 'Rest of World'],
  text: 'CO2',
  textposition: 'inside',
  name: 'CO2 Emissions',
  hoverinfo: 'label+percent+name',
  hole: .4,
  type: 'pie',
  marker: {
    line: {
      color: 'white',
      width: 2
    }
  }
}];

var pieLayout = {
  title: 'Global Emissions 1990-2011',
  height: 400,
  width: 480
};

Plotly.newPlot('pieDiv', pieData, pieLayout);
var myPlot = document.getElementById('pieDiv');
myPlot.on('plotly_click', function (data) {
  var point = data.points[0];
  var colors = [];
  var pull = [];
  for (var i = 0; i < pieData[0].values.length; i++) {
    if (i === point.i) {
      colors.push('red');
      pull.push(0.05);
    } else {
      colors.push('white');
      pull.push(0);
    }
  }
  Plotly.restyle('pieDiv', {
    'marker.line.color': [colors],
    'pull': [pull]
  }, [0]);
});