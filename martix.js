const canvas = document.getElementById("mat")
canvas.width = window.innerWidth
canvas.height = window.innerHeight
const context = canvas.getContext('2d')

const letters = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッンABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
const fontSize = 16;
const columns = canvas.width/fontSize;

const letcol = [];

for (let i=0; i < columns; i++) {
    letcol[i] = 1
}

const draw = () => {
    context.fillStyle = 'rgba(0,0,0,0.5)'
    context.fillRect(0,0,canvas.width, canvas.height)

    context.fillStyle = '#0239cfff';
    context.font = fontSize + 'px Iceland, monospace';

    for (let i=0; i < letcol.length; i++) {
        const letter = letters.charAt(Math.floor(Math.random()*letters.length));
        context.fillText(letter, i*fontSize, letcol[i]*fontSize)

        if (letcol[i]*fontSize > canvas.height && Math.random() > 0.9) {
            letcol[i] = 0;
        }
        letcol[i]++;
    }
};

setInterval(draw,40);