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
                x: {min: -20, max: 20},
                y: {min: -50, max: 50}
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
        const y_squared = i**3 + -10*i + 100
        if (y_squared >= 0) {
            const y = Math.sqrt(y_squared)
            pos_points.push({x: i,y: y})
            neg_points.push({x: i,y: -y})
        }}
    return [pos_points, neg_points]
}

function cal_m(point) {
    return
}

drawElliptic()

let selected;

curve2.addEventListener("click", (eve) => {
        const points = elliptiCurve.getElementsAtEventForMode(eve, 'nearest', {intersect: true}, true);
        if (points.length) {
        const datasetIndex = points[0].datasetIndex;
        const index = points[0].index;
        selectedPoint = elliptiCurve.data.datasets[datasetIndex].data[index];
        }
})