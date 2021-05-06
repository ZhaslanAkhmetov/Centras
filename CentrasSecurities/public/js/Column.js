google.charts.load("current", {packages:['corechart']});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['', 'Доходность ЕНПФ', 'Инфляция'],
        ['2011', {v:2.6, f:'2.6%'}, {v:7.4, f:'7.4%'}],
        ['2012', {v:4.0, f:'4.0%'}, {v:6.0, f:'6.0%'}],
        ['2013', {v:2.4, f:'2.4%'}, {v:4.8, f:'4.8%'}],
        ['2014', {v:6.3, f:'6.3%'}, {v:7.4, f:'7.4%'}],
        ['2015', {v:15.7, f:'15.7%'}, {v:13.6, f:'13.6%'}],
        ['2016', {v:7.9, f:'7.9%'}, {v:8.5, f:'8.5%'}],
        ['2017', {v:7.9, f:'7.9%'}, {v:7.1, f:'7.1%'}],
        ['2018', {v:11.3, f:'11.3%'}, {v:5.3, f:'5.3%'}],
        ['2019', {v:6.6, f:'6.6%'}, {v:5.4, f:'5.4%'}],
        ['2020', {v:10.9, f:'10.9%'}, {v:7.5, f:'7.5%'}],
    ]);

    var view = new google.visualization.DataView(data);
    view.setColumns([0, 1,
        { calc: "stringify",
            sourceColumn: 1,
            type: "string",
            role: "annotation" },
        2,{ calc: "stringify",
            sourceColumn: 2,
            type: "string",
            role: "annotation" },]);

    var options = {
        colors: ['#3dc55e', '#5d9edb'],
        bar: {groupWidth: "70%"},
        height:450,
        chartArea: {'width': '90%', 'height': '80%'},
        legend: { position: "bottom" },
    };
    var chart = new google.visualization.ColumnChart(document.getElementById("columnchart_values"));
    chart.draw(view, options);
}
