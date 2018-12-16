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
        "Ανατολική Μακεδονία και Θράκη": "2004",
        "value" : 608.182
      } ,
      { 
        "label": "Κεντρική Μακεδονία",
        "value" : 1.882.108
      } ,
      { 
        "label": "Δυτική Μακεδονία",
        "value" : 283.689
      } ,
      { 
        "label": "Ήπειρος",
        "value" : 336.856
      } ,
      { 
        "label": "Θεσσαλία",
        "value" : 732.762
      } ,
      { 
        "label": "Στερεά Ελλάδα",
        "value" : 547.390
      } ,
      { 
        "label": "Ιόνια Νησιά",
        "value" : 207.855
      } ,
      { 
        "label": "Δυτική Ελλάδα",
        "value" : 679.796
      } , 
      { 
        "label": "Πελοπόννησος",
        "value" : 577.903
      } ,
      { 
        "label": "Αττική",
        "value" : 3.828.434
      } , 
      { 
        "label": "Βόρειο Αιγαίο",
        "value" : 199.231
      } , 
      { 
        "label": "Νότιο Αιγαίο",
        "value" : 309.015
      } , 
      { 
        "label": "Κρήτη",
        "value" : 623.065
      }
    ];
}
