
const ptext = document.querySelectorAll(".ptext")
const qtext = document.querySelectorAll(".qtext")
const etext = document.querySelectorAll(".etext")
const ntext = document.querySelectorAll(".ntext")
const phiNtext = document.querySelectorAll(".phiNtext")
const dtext = document.querySelectorAll(".dtext")

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

function phi(p,q) {
    return (p-1)*(q-1)
}

function gcd(a,b) {
    while (b !== 0) {
        [a,b] = [b, a % b]
    }
    return a
}

function get_list_coprimes(num) {
    list_of_coprimes = [];
    if (is_prime(num) !== true) {
        for (i=0; i<num; i++) {
            if (gcd(i,num) === 1) {
                list_of_coprimes.push(i)
            }
        }
        return list_of_coprimes
    } else {
        for (x=1; x < num; x++) {
            list_of_coprimes.push(x)
        }
    }
    return list_of_coprimes
}

p.addEventListener('keydown', (eve) => {
    if (eve.key === "Enter") {
        if (is_prime(Number(p.value)) !== true) {
           p.value = ""
           return
        } 
        ptext.forEach(txt => txt.textContent = p.value)
        qtext.forEach(txt => txt.textContent = q.value)
        nval = (p.value)*(q.value)
        ntext.forEach(txt => txt.textContent = nval)
        phin = phi(p.value,q.value)
        phiNtext.forEach(txt => txt.textContent = phin)
        console.log(get_list_coprimes(phin))
    }
})

q.addEventListener('keydown',(eve)=> {
    if (eve.key === "Enter") {
        if (is_prime(Number(q.value)) !== true) {
           q.value = ""
        } 
    }
})