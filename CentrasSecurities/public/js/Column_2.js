google.charts.load("current", {packages:['corechart']});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['', 'Средняя доходность ПИФов УК', 'Инфляция'],
        ['2011', {v:-8.9, f:'-8.9%'}, {v:7.4, f:'7.4%'}],
        ['2012', {v:11.7, f:'11.7%'}, {v:6.0, f:'6.0%'}],
        ['2013', {v:9.0, f:'9.0%'}, {v:4.8, f:'4.8%'}],
        ['2014', {v:10.2, f:'10.2%'}, {v:7.4, f:'7.4%'}],
        ['2015', {v:74.2, f:'74.2%'}, {v:13.6, f:'13.6%'}],
        ['2016', {v:10.3, f:'10.3%'}, {v:8.5, f:'8.5%'}],
        ['2017', {v:13.0, f:'13.0%'}, {v:7.1, f:'7.1%'}],
        ['2018', {v:5.7, f:'5.7%'}, {v:5.3, f:'5.3%'}],
        ['2019', {v:27.8, f:'27.8%'}, {v:5.4, f:'5.4%'}],
        ['2020', {v:49.5, f:'49.5%'}, {v:7.5, f:'7.5%'}],
    ]);

    var view = new google.visualization.DataView(data);
    view.setColumns([0, 1,
        { calc: "stringify",
            sourceColumn: 1,
            type: "string",
            role: "annotation" },
        2, { calc: "stringify",
            sourceColumn: 2,
            type: "string",
            role: "annotation" },]);

    var options = {
        colors: ['#deadc4', '#32c3f0'],
        bar: {groupWidth: "70%"},
        height:450,
        chartArea: {'width': '90%', 'height': '80%'},
        legend: { position: "bottom" },
    };
    var chart = new google.visualization.ColumnChart(document.getElementById("columnchart_values1"));
    chart.draw(view, options);
}
