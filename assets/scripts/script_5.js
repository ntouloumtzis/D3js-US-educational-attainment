var chart = c3.generate({
  bindto: d3.select('.chart'),
  data: {
    columns: [
      ['2016', 93.8 , 95.1 , 95.7, 97.1],
      ['2017', 96.6 , 98.4 , 97.8, 97.8]
    ]
  }
});
