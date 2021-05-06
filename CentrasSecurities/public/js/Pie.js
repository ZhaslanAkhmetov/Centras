// Load the Visualization API and the corechart package.
google.charts.load('current', {'packages':['corechart']});

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawChart() {

    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Topping');
    data.addColumn('number', 'Slices');
    data.addRows([
        ['Наличные деньги', 0],
        ['Министерство Финансов Республики Казахстан', 100],
        ['Корпоративные облигации в KZT и USD', 0],
        ['Корпоративные акции в KZT и USD', 0],
        ['Депозитарные расписки', 0],
        ['Вклады в банках', 0],
        ['Финансовые инструменты Инвестиционных фондов', 0],
        ['Индексные фонды облигаций и (ETFs)', 0],
        ['Инструменты денежного рынка (РЕПО и другое)', 0],
        ['Производные финансовые инструменты', 0]
    ]);

    // Set chart options
    var options = {'title':'Структура активов фонда по видам финансовых инструментов:',
        legend: 'none',
        chartArea: {'width': '90%', 'height': '60%'},
        colors: ['#e5577d']
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}
