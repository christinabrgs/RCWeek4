let total = 0

document.querySelector('#celsius').addEventListener('click', convert)

function convert() {
    total = total * 1.8 + 32
    document.querySelector('#fahrenheit').innerText = total 
}