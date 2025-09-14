const slider = document.getElementById('slider')
const sliderValue = document.getElementById('sliderValue')
const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M","N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

slider.addEventListener('input',function() {
    sliderValue.textContent = `Shift Key: ${slider.value}`

})