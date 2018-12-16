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
        "label": "2004",
        "value" : 10.4
      } ,
      { 
        "label": "2005",
        "value" : 10.1
      } ,
      { 
        "label": "2006",
        "value" : 8.6
      } ,
      { 
        "label": "2007",
        "value" : 8.4
      } ,
      { 
        "label": "2008",
        "value" : 7.7
      } ,
      { 
        "label": "2009",
        "value" : 10.0
      } ,
      { 
        "label": "2010",
        "value" : 13.4
      } ,
      { 
        "label": "2011",
        "value" : 19.1
      } , 
      { 
        "label": "2012",
        "value" : 26.2
      } ,
      { 
        "label": "2013",
        "value" : 27.8
      } , 
      { 
        "label": "2014",
        "value" : 26.0
      } , 
      { 
        "label": "2015",
        "value" : 24.7
      } , 
      { 
        "label": "2016",
        "value" : 23.1
      } , 
      { 
        "label": "2017",
        "value" : 20.8
      } , 
      { 
        "label": "2018",
        "value" : 18.6
      }
    ];
}

