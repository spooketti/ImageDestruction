const ctx = document.getElementById('myChart').getContext("2d");

let timeData = []
let positionXData = [];
let positionYData = [];

let myLineChart = new Chart(ctx, {
type: 'line',
data: {
labels: timeData,
datasets: [
    {
        label: 'Mouse X Position',
        data: positionXData,
        borderColor: 'blue',
        borderWidth: 2,
        fill: false,
    },
    {
        label: 'Mouse Y Position',
        data: positionYData,
        borderColor: 'red',
        borderWidth: 2,
        fill: false,
    }
]
},
options: {
responsive: true,
scales: {
    x: {
        title: {
            display: true,
            text: 'Time (s)',
            font: {
                padding: 4,
                size: 20,
                weight: 'bold',
                family: 'Arial'
            },
            color: 'darkblue'
        }
    },
    y: {
        title: {
            display: true,
            text: 'Position',
            font: {
                size: 20,
                weight: 'bold',
                family: 'Arial'
            },
            color: 'darkblue'
        },
        beginAtZero: true,
        scaleLabel: {
            display: true,
            labelString: 'Values',
        }
    }
}
}
});