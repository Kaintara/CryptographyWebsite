const x = document.getElementById('x')
const y = document.getElementById('y')
const b = document.getElementById('b')
const m  = document.getElementById('m')

const xtext = document.querySelectorAll('.xtext')
const ytext = document.querySelectorAll('.ytext')
const btext = document.querySelectorAll('.btext')
const mtext  = document.querySelectorAll('.mtext')

const resultA = document.querySelectorAll('.resultA')
const resultB = document.querySelectorAll('.resultB')
const resultC = document.getElementById('resultC')

const calculate = function(base,expo,mod) {
    return (base ** expo) % mod
}

const change = function(x,y,b,m,A,B,C) {
    xtext.forEach(el => el.textContent = String(x))
    ytext.forEach(el => el.textContent = String(y))
    btext.forEach(el => el.textContent = String(b))
    mtext.forEach(el => el.textContent = String(m))

    resultA.forEach(el => el.textContent = String(A))
    resultB.forEach(el => el.textContent = String(B))
    resultC.textContent = String(C)
}


x.addEventListener('keydown', (e) => {
    if (e.key === "Enter") {
        const base = Number(b.value)
        const mod = Number(m.value)
        const xval = Number(x.value)
        const yval = Number(y.value)

        const A = calculate(base,xval,mod)
        const B = calculate(base,yval,mod)
        const C = calculate(A,yval,mod)

        change(x.value,y.value,b.value,m.value,A,B,C)
    }
})

y.addEventListener('keydown', (e) => {
    if (e.key === "Enter") {
        const base = Number(b.value)
        const mod = Number(m.value)
        const xval = Number(x.value)
        const yval = Number(y.value)

        const A = calculate(base,xval,mod)
        const B = calculate(base,yval,mod)
        const C = calculate(A,yval,mod)

        change(x.value,y.value,b.value,m.value,A,B,C)
    }
})

b.addEventListener('keydown', (e) => {
    if (e.key === "Enter") {
        const base = Number(b.value)
        const mod = Number(m.value)
        const xval = Number(x.value)
        const yval = Number(y.value)

        const A = calculate(base,xval,mod)
        const B = calculate(base,yval,mod)
        const C = calculate(A,yval,mod)

        change(x.value,y.value,b.value,m.value,A,B,C)
    }
})

m.addEventListener('keydown', (e) => {
    if (e.key === "Enter") {
        const base = Number(b.value)
        const mod = Number(m.value)
        const xval = Number(x.value)
        const yval = Number(y.value)

        const A = calculate(base,xval,mod)
        const B = calculate(base,yval,mod)
        const C = calculate(A,yval,mod)

        change(x.value,y.value,b.value,m.value,A,B,C)
    }
})