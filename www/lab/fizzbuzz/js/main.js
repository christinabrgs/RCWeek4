
let count = 0

document.querySelector('.increaseClick').addEventListener('click', increaseCount)
document.querySelector('.decreaseClick').addEventListener('click', decreaseCount)

function increaseCount() {
    count = count + 1
    
    document.querySelector('.showCount').innerText = count;
    document.querySelector('.countOfTwo').innerText = ''
   
    if (count % 5 === 0 && count % 3 === 0) {
    document.querySelector('.countOfTwo').innerText = 'fizzbuzz';
    } 
    else if (count % 5 === 0) {
    document.querySelector('.countOfTwo').innerText = 'buzz';
    }
    else if (count % 3 === 0) {
    document.querySelector('.countOfTwo').innerText = 'fizz'; 
    }
}


function decreaseCount() {
    count = count - 1

    document.querySelector('.showCount').innerText = count;
    document.querySelector('.countOfTwo').innerText = ''
    
    if (count % 5 === 0 && count % 3 === 0) {
    document.querySelector('.countOfTwo').innerText = 'fizzbuzz';
    } 
    else if (count % 5 === 0) {
    document.querySelector('.countOfTwo').innerText = 'buzz';
    }
    else if (count % 3 === 0) {
    document.querySelector('.countOfTwo').innerText = 'fizz'; 
    }
}