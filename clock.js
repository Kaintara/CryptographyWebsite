const canva = document.getElementById('clock')
const ctx = canva.getContext('2d')
const slider1 = document.getElementById('slider1')
const slide1 = document.getElementById('sliderinfo1')
const slide2 = document.getElementById('sliderinfo2')
const slide3 = document.getElementById('sliderinfo3')

const centX = canva.width/2
const centY = canva.height/2

ctx.strokeStyle = '#fff';
ctx.lineWidth = 7;
ctx.beginPath()
ctx.arc(centX, centY, canva.width/2.5, 0, Math.PI*2);
ctx.stroke()

function drawHand(ctx, angle) {
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(centX,centY);
    const x = centX + (canva.height/3) * Math.sin(angle);
    const y = centY - (canva.height/3) * Math.cos(angle);
    ctx.lineTo(x,y);
    ctx.stroke();
}

drawHand(ctx,0)
drawHand(ctx,)
slider1.addEventListener('input', function() {
    const hour = slider1.value
    const angle = (hour % 12) * (Math.PI /6);
    
})
