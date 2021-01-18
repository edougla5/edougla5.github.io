let plus = false
let minus = false
let multiply = false
let divide = false
let subtract = false
let equals = false
let ac = false

let screen = document.getElementById('innerText')

let numTot = 0
function operator(value) {
    if(value == 'plus')
        plus = true
    else if(value == 'minus')
        minus = true
    else if (value == 'multiply')
        multiply = true
    else if (value == 'divide')
        divide = true
    else if (value == 'equals') {
        screen.innerHTML = numTot
    }
    else if(value == 'subtract')
        subtract = true
    else if(value == 'ac') {
        screen.innerHTML = 0
        numTot = 0
    }
}

    let newNum

function myFunc(num) {
    if(plus) {
        numTot += num
        plus=false
    } else if(minus) {
        numTot-=num
        minus=false
    } else if(divide) {
        numTot/=num
        divide=false
    } else if(multiply) {
        numTot*= num
        multiply=false
    }
}