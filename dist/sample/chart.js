var data = [];

// var numOfPoints = 3;
// var numOfTraces = 6;
var bargap = 0.4;

// var categories = [];

// for (p = 0; p < numOfPoints; p++) {
//     categories.push("cat " + p);
// }

// for (var t = 0; t < numOfTraces; t++) {
//     var values = [];
//     for (p = 0; p < numOfPoints; p++) {
//         values.push(Math.round((Math.random() - 0.5) * 100));
//     }
//     var trace = {
//         x: categories,
//         y: values,
//         type: "bar",
//         name: "Series " + t
//     }

//     data.push(trace);
// }

var layout = {
    margin: {
        l: 10,
        b: 10,
        t: 10,
        r: 10,
        autoexpand: true
    },
    barmode: 'group',
    bargroupgap: 0.02,
    bargap: bargap,
    showlegend: true,
    xaxis: {
        title: "Yer Olde Axis Title"
    }
};

data = [
    {
        x: ["This is a very very very very long city name:USD", "London:GBP", "New York:YEN"],
        y: [40, 10, 30],
        type: "bar"
    },
    {
        x: ["This is a very very very very long city name:USD", "Sidney:AUD", "New York:YEN"],
        y: [-20, -10, -40],
        type: "bar"
    },
];

//Plotly.overrideColorDefaults(["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462","#b3de69","#fccde5","#d9d9d9","#bc80bd","#ccebc5","#ffed6f"]);

Plotly.newPlot('myDiv', data, layout, { displayModeBar: false, editable: false, editableMainTitle: false, editableAxisX: false, editableAxisY: false });

var annotations = [];
var delta = (1 - bargap) / data.length;
var pivot = Math.floor(data.length / 2);
var d = document.getElementById('myDiv');
var categories = d._fullLayout.xaxis._categories;

// console.log("delta: " + delta);

for (var si = 0; si < data.length; si++) {
    var offset = si - pivot;
    if ((data.length % 2) === 0) {
        offset += 0.5;
    }
    for (var ci = 0; ci < categories.length; ci++) {
        var cat = categories[ci];
        var aci = data[si].x.indexOf(cat);
        if (aci >= 0) {
            var x = ci + offset * delta;
            var y = data[si].y[aci];
            var a = {
                x: x,
                y: y,
                text: y,
                xanchor: 'center',
                yanchor: y >= 0 ? 'bottom' : 'top',
                showarrow: false
            };
            annotations.push(a);
        }
    }
}

var a = JSON.stringify(annotations);

Plotly.relayout('myDiv', { hovermode: "closest", annotations: annotations });

var myPlot = document.getElementById('myDiv');
myPlot.on('plotly_hover', function (eventData) {
    eventData.points.forEach(function (p) {
        console.log('pixel position', p.xaxis.c2p(p.xaxis.d2c(p.x)), p.yaxis.l2p(p.y));
    });
});

// console.log("Annotations: " + a);