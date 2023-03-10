


document.querySelector('#multiply').addEventListener('click', multiplyNumbers)
document.querySelector('#divide').addEventListener('click', divideNumbers)
document.querySelector('#add').addEventListener('click', addNumbers)
document.querySelector('#subtract').addEventListener('click', subtractNumbers)

function multiplyNumbers (numOne, numTwo) {
    let numOne = document.querySelector('#firstNumber').value
    let numTwo = document.querySelector('#secondNumber').value

    document.querySelector('#result').innerText = numOne * numTwo

}

