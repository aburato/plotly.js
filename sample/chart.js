var trace1 = {
  y: ['A', 'B', 'C'],
  x: [2.5, 1.5, 2],
  type: 'bar',
  orientation: "h"
};
var trace2 = {
  y: ['B', 'C', 'D'],
  x: [-2.5, -1.5, -2],
  type: 'bar',
  xaxis: "x2",
  orientation: "h"
};

var barLayout = {
  barmode: 'group',
  hovermode: 'closest',
  width: 600,
  xaxis2: {
        overlaying:'x',
        side:'top'
  }
};
var barData = [trace1, trace2];
Plotly.newPlot('barDiv', barData, barLayout);
