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
                label: "Ellipric Curve",
                data: full,
                color: "#0239cfff",
                borderColor: "#0239cfff",
                backgroundColor: "#0239cfff",
                font: {
                    family:'Iceland',
                }

            }]
        },
        options: {
            scales: {
                x: {min: -20, max: 20},
                y: {min: -50, max: 50}
            }
        }
    })
}

function generatePoints() {
    const pos_points = [];
    const neg_points = []
    for (let i = -20; i <= 20; i+= 0.001){
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