const canva = document.getElementById('clock')
const ctx = canva.getContext('2d')
const slider1 = document.getElementById('slider1')
const slide1 = document.getElementById('sliderinfo')
const slide2 = document.getElementById('sliderinfo2')
const slide3 = document.getElementById('sliderinfo3')

const hours = ["13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00","23:00"]



const centX = canva.width/2
const centY = canva.height/2

function drawClock(ctx) {
    ctx.strokeStyle = '#0239cfff';
    ctx.lineWidth = 7;
    ctx.beginPath()
    ctx.arc(centX, centY, canva.width/2.5, 0, Math.PI*2);
    ctx.stroke()
}


function drawHand(ctx, angle, length) {
    ctx.strokeStyle = '#0239cfff';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(centX,centY);
    const x = centX + (length) * Math.sin(angle);
    const y = centY - (length) * Math.cos(angle);
    ctx.lineTo(x,y);
    ctx.stroke();
}
drawClock(ctx)
drawHand(ctx,0,canva.height/3)
drawHand(ctx,(Math.PI /6),canva.height/4)
slider1.addEventListener('input', function() {
    const hour = slider1.value
    const angle = (hour % 12) * (Math.PI /6);
    ctx.clearRect(0,0,canva.width,canva.height)
    drawClock(ctx)
    drawHand(ctx,0,canva.height/3)
    drawHand(ctx,angle,canva.height/4)
    slide1.textContent = hours[slider1.value -1]
    slide2.textContent = `${Number(slider1.value)+12} mod 12`
    slide3.textContent = `${slider1.value} pm`
})
