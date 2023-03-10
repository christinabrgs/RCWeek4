//Create a function that grabs the number of snacks from the input and tells you to stop that many times

document.querySelector('#help').addEventListener('click', stopSnacking)

function stopSnacking() {
    let snacks = Number(document.querySelector('input').value)
    
    for(let i = 1; i <= snacks; i++) {
        document.querySelector('#stops').innerText += 'STOP'
    }
    

}    


    // while (snacks > 0) {
    // document.querySelector('#stops').innerText = snacks++
    // }