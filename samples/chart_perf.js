var trace1 = {
  //x: [2, 3, 4], 
  //y: [-40, 50, 60],
  x: ['2017-01-04', '2017-01-05', '2017-01-06'], 
  y: [-40, 50, 60],
  close: [116.019997, 116.610001, 117.910004], 
  
  decreasing: {line: {color: '#7F7F7F'}}, 
  
  high: [116.510002, 116.860001, 118.160004], 
  
  increasing: {line: {color: '#17BECF'}}, 
  
  line: {color: 'rgba(31,119,180,1)'}, 
  
  low: [115.75, 115.809998, 116.470001], 
  
  open: [115.849998, 115.919998, 116.779999], 
  
  type: 'candlestick', 
  name: 'candlestick',
  opacity: 0.5
};

var trace2 = {
  //x: [2, 3, 4], 
  x: ['2017-01-04', '2017-01-05', '2017-01-06'], 
  y: [21, 5, 6], 
  name: 'yaxis2 data', 
  yaxis: 'y2', 
  type: 'bar',
  opacity: 0.3
};

var data = [trace2, trace1];

var layout = {
  title: 'Double Y Axis Example', 
  yaxis: {title: 'yaxis title'}, 
  yaxis2: {
    title: 'yaxis2 title', 
    titlefont: {color: 'rgb(148, 103, 189)'}, 
    tickfont: {color: 'rgb(148, 103, 189)'}, 
    overlaying: 'y', 
    side: 'right'
  }
};

var plotDiv = document.getElementById('myDiv');

Plotly.newPlot(plotDiv, data, layout);