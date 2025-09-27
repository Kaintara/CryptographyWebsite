Chart.defaults.backgroundColor = "#0239cfff";
Chart.defaults.borderColor = "#0239cfff";
Chart.defaults.color = "#0239cfff";

const curve = document.getElementById('curve')
const a = document.getElementById("a_input")
const b = document.getElementById("b_input")

let curveChart = null

drawCurve()

function drawCurve() {
    const points = generatePoints()
    const full = points[0].concat(points[1])
    if (curveChart) {
        curveChart.destroy()
    }
    curveChart = new Chart(curve, {
        type: "scatter",
        data: {
            datasets: [{
                data: full,
                pointRadius: 1,
            }]
        },
        options: {
            scales: {
                x: {min: -20, max: 20},
                y: {min: -50, max: 50}
            },
            plugins: {
                tooltip: {
                    enabled: false // disables tooltips on hover
                },
                legend: {
                    display: false,
                }
            },
            hover: {
                mode: null // disables hover interactions
            },
            responsive: true,
            maintainAspectRatio: false,
            }
    })
}

function generatePoints() {
    const pos_points = [];
    const neg_points = []
    for (let i = -20; i <= 20; i+= 0.005){
        const y_squared = i**3 + Number(a.value)*i + Number(b.value)
        if (y_squared >= 0) {
            const y = Math.sqrt(y_squared)
            pos_points.push({x: i,y: y})
            neg_points.push({x: i,y: -y})
        }}
    return [pos_points, neg_points]
}


a.addEventListener('keydown', (eve) => {
    if (eve.key === 'Enter') {
        drawCurve()
    }
})

b.addEventListener('keydown', (eve) => {
    if (eve.key === 'Enter') {
        drawCurve()
    }
})