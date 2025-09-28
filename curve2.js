const curve2 = document.getElementById("curve2")

let elliptiCurve = null

function drawElliptic() {

    const points = getPoints()

    if (elliptiCurve) {
        elliptiCurve.destroy()
    }

    elliptiCurve = new Chart(curve2, {
        type: "scatter",
        data: {
            datasets: [{
                data:points[0],
                pointRadius: 1,
                showLine: true
            },
        {
            data:points[1],
            pointRadius: 1,
            showLine: true
        }]
        },
        options: {
            scales: {
                x: {min: -200, max: 200},
                y: {min: -200, max: 200}
            },
            plugins: {
                legend: {
                    display: false,
                }
            },
        },
    })
}

function getPoints() {
    const pos_points = [];
    const neg_points = []
    for (let i = -100; i <= 100; i+= 0.5){
        const y_squared = i**3 -200*i + 100
        if (y_squared >= 0) {
            const y = Math.sqrt(y_squared)
            pos_points.push({x: i,y: y})
            neg_points.push({x: i,y: -y})
        }}
    return [pos_points, neg_points]
}

drawElliptic()

