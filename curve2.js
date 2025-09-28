const cxt = (document.getElementById("curve2")).getContext('2d')
const curve2 = document.getElementById("curve2")

let elliptiCurve = null

function drawElliptic() {

    const points = getPoints()

    if (elliptiCurve) {
        elliptiCurve.destroy()
    }

    elliptiCurve = new Chart(cxt, {
        type: "scatter",
        data: {
            datasets: [
                {
                    data:points[0],
                    pointRadius: 0,
                    showLine: true,
                    order: 6
                },
                {
                    data:points[1],
                    pointRadius: 0,
                    showLine: true,
                    order: 5
                },
                {
                    label: 'selected',
                    data:[],
                    pointRadius: 6,
                    backgroundColor: "#0239cfff",
                    showLine: false,
                    order: 4
                },
                {
                    label: 'tangent',
                    data: [],
                    showLine: true,
                    borderColor: "#027ACF",
                    borderWidth: 2,
                    pointRadius: 0,
                    order: 3
                },
                {
                    label: 'intersect',
                    data: [],
                    pointRadius: 6,
                    backgroundColor: "#CF0202",
                    showLine: false,
                    order: 2
                },
                {
                    label: 'sumpoint',
                    data: [],
                    pointRadius: 6,
                    backgroundColor: "#3F02CF",
                    showLine: false,
                    order: 1
                }
            
        ]
        },
        options: {
            scales: {
                x: {min: -2.5, max: 2.5},
                y: {min: -4, max: 4}
            },
            responsive:true,
            maintainAspectRatio: false,
            animation: false,
            plugins: {
                legend: {
                    display: false,
                },
                tooltip: {enabled: false}
            },
        },
    })
}

function getPoints() {
    const pos_points = [];
    const neg_points = []
    for (let i = -2.5; i <= 3.5; i+= 0.02){
        const y_squared = i**3 + -i + 1
        if (y_squared >= 0) {
            const y = Math.sqrt(y_squared)
            pos_points.push({x: i,y: y})
            neg_points.push({x: i,y: -y})
        }}
    return [pos_points, neg_points]
}

function clear() {
    elliptiCurve.data.datasets[2].data = []; // selected
    elliptiCurve.data.datasets[3].data = []; // tangent
    elliptiCurve.data.datasets[4].data = []; // intersect
    elliptiCurve.data.datasets[5].data = []; // sumPoint
    elliptiCurve.update();
}

function cal_m(point) {
    const x1 = point.x
    const y1 = point.y

    const eps = 1e-12;

    if (Math.abs(y1) < eps) {
    return {
      vertical: true,
      slope: null,
      tangentLinePoints: [ {x: x1, y: yMin - 10}, {x: x1, y: yMax + 10} ],
      third: null,
      sum: null
    };
  }

  const m = (3 * x1 * x1 - 1) / (2 * y1)

  const xR = m*m - 2 * x1
  const yR = m* (x1 - xR) - y1

  const inter = {x: xR, y: -yR}

  const padding = (5) * 0.15
  const xLeft = -2.5 - padding;
  const xRight = 2.5 + padding;
  const yLeft  = m * (xLeft - x1) + y1;
  const yRight = m * (xRight - x1) + y1;

  return {
    vertical: false,
    slope: m,
    tangentLinePoints: [ {x: xLeft, y: yLeft}, {x: xRight, y: yRight} ],
    inter: inter,
    sum: { x: xR, y: yR }
  };
}

drawElliptic()

let selected;

curve2.addEventListener("click", (eve) => {
        clear()
        const points = elliptiCurve.getElementsAtEventForMode(eve, 'nearest', {intersect: true}, true);
        if (points.length) {
        const { datasetIndex, index } = points[0]
        if (datasetIndex > 1) return
        const selectedPoint = elliptiCurve.data.datasets[datasetIndex].data[index];
        elliptiCurve.data.datasets[2].data = [{ x: selectedPoint.x, y: selectedPoint.y }]
        const result = cal_m(selectedPoint)
        elliptiCurve.data.datasets[3].data = result.tangentLinePoints;
        elliptiCurve.data.datasets[4].data = [result.inter];
        elliptiCurve.data.datasets[5].data = [ { x: result.sum.x, y: result.sum.y } ];
        elliptiCurve.update();
        }
})