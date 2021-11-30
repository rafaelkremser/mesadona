const ctx = document.getElementById('myChart').getContext('2d');
const earning = document.getElementById('earning').getContext('2d');

const myChart = new Chart(ctx, {
    type: 'polarArea',
    data: {
        labels: ['Front-End', 'Back-End', 'Full-Stack'],
        datasets: [{
            label: '# of Votes',
            data: [3000, 1900, 1200],
            backgroundColor: [
                'rgba(0, 128, 0, 1)',
                'rgba(34, 139, 34, 1)',
                'rgba(0, 100, 0, 1)'
            ]
        }]
    }
});

const mixedChart = new Chart(earning, {
    data: {
        datasets: [{
            type: 'line',
            label: 'Média',
            data: [5119, 6194, 6202, 6700, 7642, 6702, 6009, 6140, 7639, 7354, 7995, 8309],
            backgroundColor: [
                'rgba(0, 96, 11, 1)'
            ]
        }, {
            type: 'bar',
            label: 'Lucro',
            data: [5611, 6593, 6355, 6198, 7793, 6997, 7393, 7236, 6457, 6976, 7881, 8542],
            backgroundColor: [
                'rgba(0, 185, 15, 1)'
            ],
        }],
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
    },
    options: {
        responsive: true,
    }
});

