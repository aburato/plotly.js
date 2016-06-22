var categories = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Junabcdefdfsdfsdfsdfsdfsdfsdfghijklmn', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

var trace1 = {
    x: categories,
    y: [20, 14, 25, 16, 18, 22, 19, 15, 12, 16, 14, 17],
    type: 'bar',
    name: 'Primary Product',
    marker: {
        color: 'rgb(49,130,189)',
        opacity: 0.7
    },

};

var trace2 = {
    x: categories,
    y: [19, 14, 22, 14, 16, 19, 15, 14, 10, 12, 12, 16],
    type: 'bar',
    name: 'Secondary Product',
    marker: {
        color: 'rgb(204,204,204)',
        opacity: 0.5
    }
};

var data = [trace1, trace2];

var layout = {
    title: "I AM THE LOOOOOONG CHART TITLE fgdgfd gdflkghrdf;gh dfgjhdf;gjdfghdfjgheriuterhtoieruterityer tieryteiru tyer",
    margin: {
        l: 10,
        b: 10,
        t: 10,
        r: 10,
        autoexpand: true
    },
    xaxis: {
        title: "xaxis title"
    },
    yaxis: {
        title: "yaxis1 long long title"
    },
    yaxis2: {
        title: 'yaxis2 title, it is very very long',
        overlaying: 'y',
        side: 'right'
    },
    barmode: 'group',
    showlegend: true
};

Plotly.newPlot('myDiv', data, layout);