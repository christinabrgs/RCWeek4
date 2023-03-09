// *Variables*
// Create a variable and console log the value
let dog = 'pitbull'

console.log (dog)

// Create a variable, add 10 to it, and alert the value
let number = 0
let sum = number + 10

alert (sum)

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subtractFourNumbers (num1, num2, num3, num4) {
    let difference = num1 - num2 - num3 - num4
    alert (difference)
}

subtractFourNumbers (10, 5 , 3 , 5)

// Create a function that divides one number by another and returns the remainder
function divideNumberReturnRemainder (divide1, divide2) {
    let remainder = divide1 % divide2
    return (remainder)
}

divideNumberReturnRemainder (20, 7)

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function alertJumanji (jumNum1, jumNum2) {
    let sum = jumNum1 + jumNum2
    console.log (sum)

    if(sum > 50) {
    alert ('Jumanji')
    }
}

alertJumanji (30, 21)

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA

function alertZebraIfDivisibleBy3 (one, two, three) {
    let product = one * two * three

    if (product % 3 === 0 )
    alert ('ZEBRA')
}

alertZebraIfDivisibleBy3 (1, 3, 9)