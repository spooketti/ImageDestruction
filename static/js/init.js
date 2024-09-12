const posCTX = document.getElementById('posChart').getContext("2d");
const velCTX = document.getElementById('velChart').getContext("2d");
const accCTX = document.getElementById('accChart').getContext("2d");

let timeData = []
let positionXData = [];
let positionYData = [];
let velocityXData = []
let velocityYData = []
let accelerationXData = []
let accelerationYData = []

let posChart = new Chart(posCTX, {
type: 'line',
backgroundColor: ['rgb(0,0,0)'],
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
            },
            color: 'darkblue'
        }
    },
    y: {
        title: {
            display: true,
            text: 'Position (px)',
            font: {
                size: 20,  
                weight: 'bold',
                family: 'Helvetica'
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

let velChart = new Chart(velCTX, {
    type: 'line',
    data: {
    labels: timeData,
    datasets: [
        {
            label: 'Mouse X Velocity',
            data: velocityXData,
            borderColor: 'blue',
            borderWidth: 2,
            fill: false,
        },
        {
            label: 'Mouse Y Velocity',
            data: velocityYData,
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
                    family: 'Helvetica'
                },
                color: 'darkblue'
            }
        },
        y: {
            title: {
                display: true,
                text: 'Velocity (px/s)',
                font: {
                    size: 20,  
                    weight: 'bold',
                    family: 'Helvetica'
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

    let accChart = new Chart(accCTX, {
        type: 'line',
        data: {
        labels: timeData,
        datasets: [
            {
                label: 'Mouse X Acceleration',
                data: accelerationXData,
                borderColor: 'blue',
                borderWidth: 2,
                fill: false,
            },
            {
                label: 'Mouse Y Acceleration',
                data: accelerationYData,
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
                        family: 'Helvetica'
                    },
                    color: 'darkblue'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Velocity (px/s^2)',
                    font: {
                        size: 20,  
                        weight: 'bold',
                        family: 'Helvetica'
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