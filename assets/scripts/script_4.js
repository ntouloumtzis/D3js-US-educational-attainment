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
        "label": "Αθηναίων",
        "value" : 608.182
      } ,
      { 
        "label": "Θεσσαλονίκης",
        "value" : 325.182
      } ,
      { 
        "label": "Πατρέων",
        "value" : 213.984
      } ,
      { 
        "label": "Ηρακλείου",
        "value" : 173.993
      } ,
      { 
        "label": "Πειραιώς",
        "value" : 163.688
      } ,
      { 
        "label": "Λαρισαίων",
        "value" : 162.591
      } ,
      { 
        "label": "Βόλου",
        "value" : 144.449
      } ,
      { 
        "label": "Περιστερίου",
        "value" : 139.981
      } , 
      { 
        "label": "Ρόδου",
        "value" : 115.490
      } ,
      { 
        "label": "Ιωαννίτων",
        "value" : 112.486
      }
    ];
}
