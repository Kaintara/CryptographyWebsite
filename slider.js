const slider = document.getElementById('slider')
const sliderValue = document.getElementById('sliderValue')
const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M","N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

const alphabetObj = Array.from(document.querySelectorAll('.letter'))

const alphabetObjOrigin = alphabetObj.map(el => el.textContent.trim())

slider.addEventListener('input',function() {
    sliderValue.textContent = `${slider.value}`
    const shiftKey = Number(slider.value)
    alphabetObj.forEach((element, i) => {
        const index = alphabet.indexOf(alphabetObjOrigin[i]);
        element.textContent = alphabet[(index + shiftKey) % 26]
});
})