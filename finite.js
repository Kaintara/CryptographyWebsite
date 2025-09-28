const gentext = document.getElementById("gen_key")
const publictext = document.getElementById("public_key")
const privkey = document.getElementById("ECC_d")

ff = document.getElementById("finitefield")

let elliptifield = null;

function mod(n, p=2467) {
  return ((n % p) + p) % p;
}
function genpoints(a=-1, b=1, p=2467) {
    const points = []
     for (let x = 0; x < p; x++) {
    const rhs = mod(x**3 + a*x + b, p);

    for (let y = 0; y < p; y++) {
      if (mod(y**2, p) === rhs) {
        points.push({x, y});
      }
    }
  }
    return points
}

function drawfield() {
    const points = genpoints()
    elliptifield = new Chart(ff, {
        type: "scatter",
        data: {
            datasets: [{
                data: points,
                pointRadius: 0.5,
                showLine: false
            }]
        },
        options: {
            scales: {
                x: {min: 0, max: 2466,grid: {
                    display: false
                }},
                y: {min: 0, max: 2466, grid:{
                    display: false,
                }}
            },
            plugins: {
                tooltip: {
                    enabled: false 
                },
                legend: {
                    display: false,
                }
            },
            responsive: true,
            maintainAspectRatio: false,
            }
    })
}

ff.addEventListener("click", (eve) => {
    const points = elliptifield.getElementsAtEventForMode(eve, 'nearest', {intersect: true}, true);
    if (points.length) {
        const { datasetIndex, index } = points[0]
        if (datasetIndex > 1) return
        const selected = elliptifield.data.datasets[datasetIndex].data[index];
        gentext.textContent = `${selected.x},${selected.y}`
    }
})

drawfield()