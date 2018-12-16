//Donut chart example
nv.addGraph(function() {
  var chart = nv.models.pieChart()
      .x(function(d) { return d.label })
      .y(function(d) { return d.value })
      .showLabels(true)     //Display pie labels
      .labelThreshold(.05)  //Configure the minimum slice size for labels to show up
      .labelType("percent") //Configure what type of data to show in the label. Can be "key", "value" or "percent"
      .donut(true)          //Turn on Donut mode. Makes pie chart look tasty!
      .donutRatio(0.35)     //Configure how big you want the donut hole size to be.
      ;

    d3.select("#chart2 svg")
        .datum(exampleData())
        .transition().duration(350)
        .call(chart);

  return chart;
});

//Pie chart example data. Note how there is only a single array of key-value pairs.
function exampleData() {
  return  [
      { 
        "label": "Σεπτ '11",
        "value" : 19.1
      } , 
      { 
        "label": "Σεπτ '12",
        "value" : 26.2
      } ,
      { 
        "label": "Σεπτ. '13",
        "value" : 27.8
      } , 
      { 
        "label": "Σεπτ. '14",
        "value" : 26.0
      } , 
      { 
        "label": "Σεπτ. '15",
        "value" : 24.7
      } , 
      { 
        "label": "Σεπτ '16",
        "value" : 23.1
      } , 
      { 
        "label": "Σεπτ '17",
        "value" : 20.8
      } , 
      { 
        "label": "Σεπτ '18",
        "value" : 18.6
      }
    ];
}

