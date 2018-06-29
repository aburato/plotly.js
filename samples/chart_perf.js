var trace1 = {
  //x: ['2017', '2018', '2019'],
  y: [2, 3, 4, 6,7, 8, 9, 10, 11, 12, 13, 50],
  // y: [-40, 50, 60],
  x: ['2017-01-04T09:15:23.456', '2017-01-05T09:15:23.456', '2017-01-06T09:15:23.456'],
  // y: [-40, 50, 60],
  close: [116.019997, 116.610001, 117.910004],

  decreasing: {line: {color: '#7F7F7F'}},

  high: [116.510002, 116.860001, 118.160004],

  increasing: {line: {color: '#17BECF'}},

  line: {color: 'rgba(31,119,180,1)'},

  low: [115.75, 115.809998, 116.470001],

  open: [115.849998, 130, 116.779999],
  text: ['ciao1', 'ciao2', 'ciao3', 'ciao3', 'ciao3', 'ciao3', 'ciao3'],
  textbox: [['goofy0', 'goofy1', 'goofy2', 'goofy3', 'goofy4'], ['goofy5', 'goofy6', 'goofy7']],

  locations: ['FRA', 'DEU', 'RUS', 'ESP'],

  hoverinfo: 'x+y+text',

  boxpoints: false,
  //type: 'scattergeo',
  //type: 'date',
  type: 'bar',
  marker: {
    size: [1, 20, 30, 40],
    sizemin: 1,
    sizeref: 0.1,
    sizemode: 'area'
  },
  name: 'MZ',
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

var data = [trace1];

function formattazione(stringa) {
  return stringa + "zuzzu";
}

var layout = {
  title: 'Double Y Axis Example',
  xaxis: {
    type: 'date',
    //tickformat: '%H:%M',
    formatCallback: formattazione
	  },
  yaxis: {
    title: 'yaxis title',
    formatCallback: formattazione
  },
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

// Plotly.restyle(plotDiv, {marker: {color: 'red'}});