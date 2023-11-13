
//The minimum percent change from baseline
var minimumData = [{
    x: ['Retail and recreation', 'Grocery and Pharmacy', 'Parks', 'Transit Stations', 'Workplaces', 'Residential'],
    y: [-45, -35, -44, -40, -74, 2],
    name: 'Minimum percent change from baseline',
    type: 'bar',
    marker: {
        size: 14,
        color: 'Blue'
    }
}];
   
var min_layout = {
    title: 'Minimum percent change from baseline between 01/01/2022 and 15/10/2022',
    xaxis: {
        title: 'Categories of places'
    },
    yaxis: {
        title: 'Percentage (%)'
    }
    
};
  
Plotly.newPlot('minimum', minimumData, min_layout);

//The maximum percent change from baseline
var maximumData = [{
    x: ['Retail and Recreation', 'Grocery and Pharmacy', 'Parks', 'Transit Stations', 'Workplaces', 'Residential'],
    y: [108, 102, 244, 341, 110, 35],
    name: 'Maximum percent change from baseline',
    type: 'bar',
    marker: {
        size: 14,
        color: 'rgb(0, 0, 128)'
    }
}];
   
var max_layout = {
    title: 'Maximum percent change from baseline between 01/01/2022 and 15/10/2022',
    xaxis: {
        title: 'Categories of places '
    },
    yaxis: {
        title: 'Percentage (%)'
    }
};
  
Plotly.newPlot('maximum', maximumData, max_layout);

//The average percent change from baseline
var averageData = [{
    x: ['Retail and Recreation', 'Grocery and Pharmacy', 'Parks', 'Transit Stations', 'Workplaces', 'Residential'],
    y: [25.93, 40.35, 74.41, 48.95, 22.98, 13.69],
    name: 'Average percent change from baseline',
    type: 'scatter',
    marker: {
        size: 14,
        color: 'Orange'
    }

}];
   
var average_layout = {
    title: 'Average percent change from baseline',
    xaxis: {
        title: 'Categories of places'
    },
    yaxis: {
        title: 'Percentage (%)'
    }
};
  
Plotly.newPlot('average', averageData, average_layout);

//The range of percent change from baseline
var rangeData = [{
    x: ['Retail and Recreation', 'Grocery and Pharmacy', 'Parks', 'Transit Stations', 'Workplaces', 'Residential'],
    y: [153, 137, 268, 381, 184, 33],
    name: 'Range percent change from baseline',
    type: 'scatter',
    marker: {
        size: 14,
        color: 'Orange'
    }

}];
   
var range_layout = {
    title: 'Range percent change from baseline between 01/01/2022 and 15/10/2022',
    xaxis: {
        title: 'Categories of places'
    },
    yaxis: {
        title: 'Percentage (%)'
    }
};
  
Plotly.newPlot('range', rangeData, range_layout);