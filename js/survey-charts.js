var yelpChart = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(yelpChart, {
    type: 'doughnut',
    data: {
        labels: ["75% Yelp", "25% Misc."],
        datasets: [{
            label: 'users',
            data: [75,25],
            backgroundColor: [
                'rgba(131, 178, 155, 1)',
                'rgba(196, 196, 196, 1)'
            ]
        }]
    },
    options: {
        responsive:true,
        title: {
            display:true,
            text: '75% Restaurant/Bar searchers use Yelp'
        },
        legend: {
            display:false
        },
    }
});

var miscChart = document.getElementById("myChart1").getContext('2d');
var myChart1 = new Chart(miscChart, {
    type: 'doughnut',
    data: {
        labels: ["35% Google", "65% Misc."],
        datasets: [{
            label: 'users',
            data: [35,65],
            backgroundColor: [
                'rgba(131, 178, 155, 1)',
                'rgba(196, 196, 196, 1)'
            ]
        }]
    },
    options: {
        responsive:true,
        title: {
            display:true,
            text: '35% Sports Bar searchers use Google'
        },
        legend: {
            display:false
        },
    }
});
