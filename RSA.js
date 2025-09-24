
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
    for (i=2; i<num; i++) {
        if (gcd(i,num) === 1) {
            list_of_coprimes.push(i)
        }
    }
    return list_of_coprimes
}


function egcd(a, b) {
  let old_r = a, r = b;
  let old_s = 1, s = 0;
  let old_t = 0, t = 1;

  while (r !== 0) {
    const q = Math.floor(old_r / r);
    [old_r, r] = [r, old_r - q * r];
    [old_s, s] = [s, old_s - q * s];
    [old_t, t] = [t, old_t - q * t];
  }
  return [old_r,old_s,old_t]
}

function generate_d(e_1,phin) {
    d_1 = egcd(e_1,phin).at(1)
    if (d_1 !== -1) {
        return d_1
    } else {
        d.value = ''
        dtext.forEach(txt => txt.textContent = "d could not be generated")
        return ''
    }
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
        phin = phi(Number(p.value),Number(q.value))
        phiNtext.forEach(txt => txt.textContent = phin)
        lst = get_list_coprimes(phin)
        e_1 = lst.at(-1)
        etext.forEach(txt => txt.textContent = e_1)
        console.log(generate_d(e_1,phin))
    }
})

q.addEventListener('keydown',(eve)=> {
    if (eve.key === "Enter") {
        if (is_prime(Number(q.value)) !== true) {
           q.value = ""
        } 
    }
})