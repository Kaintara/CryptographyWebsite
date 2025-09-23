
const ptext = document.querySelectorAll(".ptext")
const qtext = document.querySelectorAll(".qtext")
const etext = document.querySelectorAll(".etext")
const ntext = document.querySelectorAll(".ntext")
const phiNtext = document.querySelectorAll(".phiNtext")
const p_1q_1text = document.querySelectorAll(".p-1q-1text")
const dtext = document.querySelectorAll(".dtext")
const publickeytext  = document.querySelectorAll(".publickeytext")
const privatekeytext  = document.querySelectorAll(".privatekeytext")

const p = document.getElementById("p")
const q = document.getElementById("q")
const e = document.getElementById("e")
const d = document.getElementById("d")

function is_prime(num) {
    if (num < 2) {
        return false 
    }
    for (i=2; i<= Math.sqrt(num); i++) {
        if (num % i == 0) {
            return false
        }
    }
    return true
}

p.addEventListener('keydown', (eve) => {
    if (eve.key === "Enter") {
        if (is_prime(Number(p.val)) !== true) {
            p.val = "Invalid."
            console.log("False")
        }
    }
})