var data = [
  {month: "Είδη Διατροφής", apples: 5.6},
  {month: "", apples: 0},
  {month: "Kαύσιμα/λιπαντικά αυτοκινήτων", apples: 1.0},
  {month: " ", apples: 0},
  {month: "Λοιπά καταστήματα", apples:  1.0},
  {month: "  ", apples: 0},
  {month: "Μεγάλα καταστήματα τροφίμων", apples:  5.9},
  {month: "   ", apples: 0},
  {month: "Πολυκαταστήματα", dates: -5.2},
  {month: "Τρόφιμα/Ποτά/Καπνός", apples: 3.9},
  {month: "Φαρμακευτικά/Καλλυντικά", dates:  -1.5},
  {month: "Ένδυση – Υπόδηση", apples:  4.7},
  {month: "Έπιπλα/Ηλεκτρικά είδη/Οικιακός εξοπλισμός", apples:  1.1},
  {month: "Βιβλία/Χαρτικά/Λοιπά είδη", apples:  7.4},
  {month: "Γενικός Δείκτης", apples:  3.3},
  {month: "Γενικός Δείκτης, εκτός καυσίμων και λιπαντικών αυτοκινήτων", apples:  3.4}
];

var series = d3.stack()
    .keys(["apples","dates"])
    .offset(d3.stackOffsetDiverging)
    (data);

var svg = d3.select("svg"),
    margin = {top: 50, right: 30, bottom: 50, left: 30},
    width = +svg.attr("width"),
    height = +svg.attr("height");

var x = d3.scaleBand()
    .domain(data.map(function(d) { return d.month; }))
    .rangeRound([margin.left, width - margin.right])
    .padding(0.4);

var y = d3.scaleLinear()
    .domain([d3.min(series, stackMin), d3.max(series, stackMax)])
    .rangeRound([height - margin.bottom, margin.top]);

var z = d3.scaleOrdinal(d3.schemeCategory10);

svg.append("g")
  .selectAll("g")
  .data(series)
  .enter().append("g")
    .attr("fill", function(d) { return z(d.key); })
  .selectAll("rect")
  .data(function(d) { return d; })
  .enter().append("rect")
    .attr("width", x.bandwidth)
    .attr("x", function(d) { return x(d.data.month); })
    .attr("y", function(d) { return y(d[1]); })
    .attr("height", function(d) { return y(d[0]) - y(d[1]); })

svg.append("g")
    .attr("transform", "translate(0," + y(0) + ")")
    .call(d3.axisBottom(x));

svg.append("g")
    .attr("transform", "translate(" + margin.left + ",0)")
    .call(d3.axisLeft(y));

function stackMin(serie) {
  return d3.min(serie, function(d) { return d[0]; });
}

function stackMax(serie) {
  return d3.max(serie, function(d) { return d[1]; });
}

