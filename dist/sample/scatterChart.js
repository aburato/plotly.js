var trace1 = {
  x: [1, 2, 3, 4],
  y: [10, 15, 13, 17],
  mode: 'markers'
};

var trace2 = {
  x: [2, 3, 4, 5],
  y: [16, 5, 11, 9],
  mode: 'lines'
};

var trace3 = {
  x: [1, 2, 3, 4],
  y: [12, 9, 15, 12],
  mode: 'lines+markers'
};

var data = [ trace1, trace2, trace3 ];

var layout = {
  title:'Line and Scatter Plot', autosize: true, margin: {t: 10, b: 10, l: 10, r: 10}
};

var d = document.getElementById('myDiv');

Plotly.newPlot(d, data, layout);

window.setInterval(function(){Plotly.Plots.resize(d)}, 1000);