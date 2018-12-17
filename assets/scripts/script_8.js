var margin = {top: 20, right: 40, bottom: 30, left: 20},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom,
    barWidth = Math.floor(width / 19) - 1;

nv.addGraph(function() {
  var chart = nv.models.discreteBarChart()
      .x(function(d) { return d.label })    //Specify the data accessors.
      .y(function(d) { return d.value })
      .staggerLabels(true)    //Too many bars and not enough room? Try staggering labels.
      .tooltips(false)        //Don't show tooltips
      .showValues(true)       //...instead, show the bar value right on top of each bar.
      .transitionDuration(350)
      ;

  d3.select('#chart svg')
      .datum(exampleData())
      .call(chart);

  nv.utils.windowResize(chart.update);

  return chart;
});

//Each bar represents a single discrete quantity.
function exampleData() {
 return  [ 
    {
      key: "Cumulative Return",
      values: [
        { 
          "label" : "Καταστήματα ειδών διατροφής" ,
          "value" : 5.6
        } , 
        { 
          "label" : "Kαύσιμα και λιπαντικά αυτοκινήτων" , 
          "value" : 1.0
        } , 
        { 
          "label" : "Λοιπά καταστήματα" , 
          "value" : 1.0
        } , 
        { 
          "label" : "Πολυκαταστήματα" , 
          "value" : -5.2
        } , 
        { 
          "label" : "Μεγάλα καταστήματα τροφίμων" ,
          "value" : 5.9
        } , 
        { 
          "label" : "Τρόφιμα – Ποτά – Καπνός" , 
          "value" : 3.9
        } , 
        { 
          "label" : "Φαρμακευτικά – Καλλυντικά" , 
          "value" : -1.5
        } , 
        { 
          "label" : "Ένδυση – Υπόδηση" , 
          "value" : 4.7
        }
        { 
          "label" : "Έπιπλα – Ηλεκτρικά είδη – Οικιακός εξοπλισμός" , 
          "value" : 1.1
        } , 
        { 
          "label" : "Βιβλία – Χαρτικά – Λοιπά είδη" , 
          "value" : 7.4
        }
        { 
          "label" : "Γενικός Δείκτης" , 
          "value" : 3.3
        } , 
        { 
          "label" : "Γενικός Δείκτης, εκτός καυσίμων και λιπαντικών αυτοκινήτων"
          "value" : 3.4
        }
      ]
    }
  ]
}
