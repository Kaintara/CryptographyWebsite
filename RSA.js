selecte = document.getElementById("e-select")
selectd = document.getElementById("d-select")


const ptext = document.querySelectorAll(".ptext")
const qtext = document.querySelectorAll(".qtext")
const etext = document.querySelectorAll(".etext")
const ntext = document.querySelectorAll(".ntext")
const phiNtext = document.querySelectorAll(".phiNtext")
const dtext = document.querySelectorAll(".dtext")

const p = document.getElementById("p")
const q = document.getElementById("q")

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

function Euclidean(a,b) {
    let old_r = a, r = b;
  let old_s = 1, s = 0;
  let old_t = 0, t = 1;

  while (r !== 0) {
    let q = Math.floor(old_r / r); 
    [old_r, r] = [r, old_r - q * r];
    [old_s, s] = [s, old_s - q * s];
    [old_t, t] = [t, old_t - q * t];
  }

  return { gcd: old_r, x: old_s, y: old_t };
    
}


function generate_d(e_1,phin) {
    d_1 = Euclidean(e_1,phin)
    return (phin + d_1["x"] )

}

function generate_options(lst,d_1,phin) {
    var counter = 1
    selecte.innerHTML = "";
    selectd.innerHTML = "";
    for (const num of lst) {
        const optione = document.createElement("option")
        const optiond = document.createElement("option")
        Dval = (d_1 + phin*counter)
        optiond.value = Dval
        optione.value = num
        counter ++;
        optione.textContent = String(num)
        optiond.textContent = String(Dval)
        selecte.appendChild(optione)
        selectd.appendChild(optiond)
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
        e_1 = lst.at(-2)
        etext.forEach(txt => txt.textContent = e_1)
        d_1 = generate_d(e_1,phin)
        dtext.forEach(txt => txt.textContent = d_1)
        selectd.value = Number(d_1)
        generate_options(lst,d_1,Number(phin))
    }
})

q.addEventListener('keydown',(eve)=> {
    if (eve.key === "Enter") {
        if (is_prime(Number(q.value)) !== true) {
           q.value = ""
           return
        } 
        ptext.forEach(txt => txt.textContent = p.value)
        qtext.forEach(txt => txt.textContent = q.value)
        nval = (p.value)*(q.value)
        ntext.forEach(txt => txt.textContent = nval)
        phin = phi(Number(p.value),Number(q.value))
        phiNtext.forEach(txt => txt.textContent = phin)
        lst = get_list_coprimes(phin)
        e_1 = lst.at(-2)
        etext.forEach(txt => txt.textContent = e_1)
        d_1 = generate_d(e_1,phin)
        dtext.forEach(txt => txt.textContent = d_1)
        selectd.value = Number(d_1)
        generate_options(lst,d_1,Number(phin))
    }
})

selectd.addEventListener('change', (eve) => {
    dtext.forEach(txt => txt.textContent = eve.target.value)
})

selecte.addEventListener('change', (eve) => {
    e_1 = Number(eve.target.value)
    etext.forEach(txt => txt.textContent = e_1)
    d_1 = generate_d(e_1,phin)
    dtext.forEach(txt => txt.textContent = d_1)
    //generate_options(lst,d_1,Number(phin))
}
)