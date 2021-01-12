
let plus = false
let minus = false
let multiply = false
let divide = false
let subtract = false
let equals = false
let ac = false

function operator(value) {
    if(value == 'plus')
        plus = true
    else if(value == 'minus')
        minus = true
    else if (value == 'multiply')
        multiply = true
    else if (value == 'divide')
        divide = true
    else if (value == 'equals')
        equals = true
    else if(value == 'subtract')
        subtract = true
    else if(value == 'ac')
        ac = true
}

let newNum = parseInt(document.getElementById('innerText').innerHTML)
let numTot

function myFunc(num) {
    if (ac) {
        document.getElementById('innerText').innerHTML = num
        ac = false
    } else if (plus) {
        newNum += num
        document.getElementById('innerText').innerHTML = num
        plus = false
    }
}