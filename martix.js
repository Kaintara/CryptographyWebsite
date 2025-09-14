const canvas = document.getElementById("mat")
const context = canvas.getContext('2d')

const letters = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッンABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
const fontSize = 10;
const columns = canvas.width/fontSize;

const letcol = [];

for (let i=0; x < columns; x++) {
    letcol[i] = 1
}

const draw = () => {
    context.fillStyle = 'rgba(0,0,0,0.5)'
    context.fillRext(0,0,canvas.width, canvas.height)
}