
const inputOne = document.querySelector('#firstNumber')
const inputTwo = document.querySelector('#secondNumber')
const result = document.querySelector('#result')

document.querySelector('#multiply').addEventListener('click', multiplyNumbers)
document.querySelector('#divide').addEventListener('click', divideNumbers)
document.querySelector('#add').addEventListener('click', addNumbers)
document.querySelector('#subtract').addEventListener('click', subtractNumbers)

function multiplyNumbers () {
    let numOne = Number(inputOne.value)
    let numTwo = Number(inputTwo.value)

    result.innerText = numOne * numTwo
}


function divideNumbers () {
    let numOne = Number(inputOne.value)
    let numTwo = Number(inputTwo.value)

    result.innerText = numOne / numTwo
}

function addNumbers () {
    let numOne = Number(inputOne.value)
    let numTwo = Number(inputTwo.value)

    result.innerText = numOne + numTwo
}

function subtractNumbers () {
    let numOne = Number(inputOne.value)
    let numTwo = Number(inputTwo.value)

    result.innerText = numOne - numTwo
}

