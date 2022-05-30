function add(x, y) {
    return (x + y);
}

function multiply(x, y) {
    return (x * y);
}

function subtract(x, y) {
    return (x - y);
}

function divide(x, y) {
    return (x / y);
}

function equals() {
    display()
}

let operationChosen;
let operationAdd = document.querySelector('.operation-add');
let operationSubtract = document.querySelector('.operation-subtract');
let operationMultiply = document.querySelector('.operation-multiply');
let operationDivide = document.querySelector('.operation-divide');
let operationEquals = document.querySelector('.operation-equals');


let allClear = document.querySelector(".all-clear")
let display = document.querySelector('.display')
let upperOperand = document.querySelector('.upper-operand')
let lowerOperand = document.querySelector('.lower-operand')
let del = document.querySelector('.del')

//All clear buton
function clear() {
    upperOperand.innerHTML = ''
    lowerOperand.innerHTML = ''
}

function dele() {
    lowerOperand.innerText = lowerOperand.innerText.toString().slice(0, -1)
    if (lowerOperand.innerText == '') {
        lowerOperand.innerText = upperOperand.innerText.toString().slice(0, -1)
        upperOperand.innerText = ''
    }
}

allClear.addEventListener('click', clear)
del.addEventListener('click', dele);

//appending digits and operands
let buttons = document.querySelectorAll('.button')
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        if (button.innerText == '.' && lowerOperand.innerText.includes('.')) return
        else {
            lowerOperand.innerHTML += e.target.innerText;
        }
    })
});


let operations = Array.from(document.getElementsByClassName('operation'))
operations.map(operation => {
    operation.addEventListener('click', (e) => {
        upperOperand.innerHTML = lowerOperand.innerHTML + e.target.innerText
        lowerOperand.innerHTML = ''
        operationChosen = e.target.innerText;
    })
});


function operate() {
    let computation;
    let upper = parseFloat(upperOperand.innerText)
    let lower = parseFloat(lowerOperand.innerText)
    if (isNaN(upper) || isNaN(lower)) return
    switch (operationChosen) {
        case '+':
            computation = add(upper, lower);
            break
        case '-':
            computation = subtract(upper, lower);
            break
        case '*':
            computation = multiply(upper, lower);
            break
        case '÷':
            computation = divide(upper, lower);
            break
        default:
            return
    }
    lowerOperand.innerText = computation;
    upperOperand.innerText = ''
}

operationEquals.addEventListener('click', () => {
    operate();
})





