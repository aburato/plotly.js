var data = [{
  values: [16, 15, 12, 6, 5, 4, 42],
  labels: ['US', 'China', 'European Union', 'Russian Federation', 'Brazil', 'India', 'Rest of World' ],
  name: 'GHG Emissions',
  hoverinfo: 'label+percent+name',
  hole: .4,
  type: 'pie'
}];

var layout = {
  title: 'Global Emissions 1990-2011',
  margin: {
      l: 5,
      r: 5,
      t: 5,
      b: 5
    },
};
plotDiv = document.getElementById('myDiv')
Plotly.newPlot(plotDiv, data, layout);