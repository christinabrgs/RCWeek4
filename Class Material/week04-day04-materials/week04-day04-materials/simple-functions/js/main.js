//---Easy
//create a function that subtracts two numbers and alerts the difference

function subtraction (num1, num2) {
    let difference = num1 - num2
    alert(difference)
}
subtraction(3, 3)

//create a function that divides three numbers and console logs the quotient
function divideThreeNumbers (one, two, three) {
    console.log (one / two / three)
}

divideThreeNumbers (8, 2, 2)

//create a function that multiplys three numbers and returns the product
function multiplyThreeNumbers (n1, n2, n3) {
    let product = n1 * n2 * n3
    return (product)
}
//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number
function addAndDivideForRemainder (number1, number2, number3) {
    let sum = number1 + number2
    let remainder = sum % number3

    return (remainder)
}

addAndDivideForRemainder (30, 5, 7)

//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number

function multiplyTwoNumbersCompare100 (num1, num2, num3, num4) {
    let product = num1 * num2

    if (product > 100) {
    let sum = product + num1 + num2

    console.log(sum)
    }

    else if (product < 100) {
    let difference =  product - num1 - num2

    console.log(difference)
    }

    else if (product == 100) {
       let product = num1 * num2 * num3
       let remainder = product % num4

       alert(remainder)
    }


}