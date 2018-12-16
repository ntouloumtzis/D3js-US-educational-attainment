var chart = c3.generate({
  bindto: d3.select('.chart'),
  data: {
    columns: [
      ['Ανατολικής Θράκης και Μακεδονίας', 608.182],
      ['2017', 96.6 , 98.4 , 97.8, 97.8]
    ]
  }
});
