


document.querySelector('#convert').addEventListener('click', converter)

function converter() {
    let temp = document.querySelector('#celsius').value
    total = temp * 1.8 + 32
    document.querySelector('#fahrenheit').innerText = total 
}