
let temp = document.querySelector('#celsius').value

document.querySelector('#convert').addEventListener('click', converter)

function converter() {
    total = temp * 1.8 + 32
    document.querySelector('#fahrenheit').innerText = total 
}