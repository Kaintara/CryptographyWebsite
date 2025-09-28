const gentext = document.getElementById("gen_key")
const publictext = document.getElementById("public_key")
const privkey = document.getElementById("ECC_d")

ff = document.getElementById("finitefield")

let elliptifield = null;

function mod(n, p=2467) {
  return ((n % p) + p) % p;
}

function modINT(n, p=2467n) {
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
                pointRadius: 2,
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

function Euclidean(a, b) {
  a = BigInt(a); b = BigInt(b);
  let x0 = 1n, x1 = 0n;
  let y0 = 0n, y1 = 1n;
  while (b != 0n) {
    const q = a / b;
    const r = a % b;
    [a, b] = [b, r];
    [x0, x1] = [x1, x0 - q * x1];
    [y0, y1] = [y1, y0 - q * y1];
  }
  return { g: a, x: x0, y: y0 };
}


function isInfinity(P) { return P === null; }
function pointNeg(P) {
  if (P === null) return null;
  return { x: P.x, y: modINT(-P.y) };
}

function modInv(n, m = 2467n) {
  const { g, x } = Euclidean(modINT(n, m), m);
  if (g !== 1n) throw new Error('modular inverse does not exist');
  return modINT(x, m);
}

function pointAdd(P,Q) {
    if (P === null) return Q;
    if (Q === null) return P;

  if (P.x === Q.x && modINT(P.y + Q.y) === 0n) return null;

  let m;
  if (P.x === Q.x && P.y === Q.y) {
 
    const num = modINT(3n * P.x * P.x -1n);
    const den = modInv(2n * P.y);
    m = modINT(num * den);
  } else {
 
    const num = modINT(Q.y - P.y);
    const den = modInv(Q.x - P.x);
    m = modINT(num * den);
  }

  const xr = modINT(m * m - P.x - Q.x);
  const yr = modINT(m * (P.x - xr) - P.y);
  return { x: xr, y: yr };
}


function genPublic(G,d) {
    d = BigInt(d)
    if (d === 0n || G === null) return null;

    let Q = null
    let R = G

    while (d > 0n) {
        if (d & 1n) {
            Q = pointAdd(Q,R);
        }
        R = pointAdd(R,R)
        d >>= 1n
    }
    return Q
}

ff.addEventListener("click", (eve) => {
    const points = elliptifield.getElementsAtEventForMode(eve, 'nearest', {intersect: true}, true);
    if (points.length) {
        const { datasetIndex, index } = points[0]
        if (datasetIndex > 1) return
        const selected = elliptifield.data.datasets[datasetIndex].data[index];
        gentext.textContent = `${selected.x},${selected.y}`
        const d = BigInt(privkey.value)
        const G = {x:BigInt(selected.x), y:BigInt(selected.y)}
        const Q = genPublic(G,d)
        publictext.textContent = `${Q.x},${Q.y}`
    }
})

drawfield()