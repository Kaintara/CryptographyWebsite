const curve = document.getElementById('curve')
const a = document.getElementById("a")
const b = document.getElementById("b")

const xValues = [50,60,70,80,90,100,110,120,130,140,150];
const yValues = [7,8,8,9,9,9,10,11,14,14,15];

drawCurve(xValues,yValues)

function drawCurve(xValues, yValues) {
    curveChart = new Chart(curve, {
        type: "line",
        data: {
            labels: xValues,
            datasets: [{
                data:yValues
                
            }]
        },
        options: {
            //responsive: false,
        }
    })
}
