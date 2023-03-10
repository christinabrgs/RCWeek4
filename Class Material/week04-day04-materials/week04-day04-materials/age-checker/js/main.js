//Creates a conditonal that checks their age and targets the h1 on the document, to display there

const p = document.querySelector('p')

document.querySelector('h1').addEventListener('click', checker)

function checker() {
    let personAge = Number(document.querySelector('#danceDanceRevolution').value)
    if (personAge < 18) {
        p.innerText = "Too Young"
    }
    else if (personAge < 18) {
        p.innerText = "Can't hate from outside the club, because they can't even get in!"
    }
    else if (personAge < 21) {
        p.innerText = "can not drink !"
    }
    else if (personAge < 25) {
        p.innerText = "can not rent cars affordably"
    }
    else if (personAge < 30) {
        p.innerText = "can not rent fancy cars affordably"
    }
    else if (personAge > 30) {
        p.innerText = "there is nothing left to look forward too"
    }

}

// only creating a conditional for the console 

function ageChecker (personAge) {
    if (personAge < 18) {
        console.log("Too Young")
    }
    else if (personAge < 18) {
        console.log("Can't hate from outside the club, because they can't even get in!")
    }
    else if (personAge < 21) {
        console.log("can not drink !")
    }
    else if (personAge < 25) {
        console.log("can not rent cars affordably")
    }
    else if (personAge < 30) {
        console.log("can not rent fancy cars affordably")
    }
    else if (personAge > 30) {
        console.log("there is nothing left to look forward too")
    }

}



//If under 16, tell them they can not drive
//If under 18, tell them they can't hate from outside the club, because they can't even get in
//If under 21, tell them they can not drink
//If under 25, tell them they can not rent cars affordably
//If under 30, tell them they can not rent fancy cars affordably
//If under over 30, tell them there is nothing left to look forward too


//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph
