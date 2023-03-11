
const monthInput = document.querySelector('#month')
const dayInput = document.querySelector('#day')
const button = document.querySelector('#click')
const result = document.querySelector('#result')

button.addEventListener('click', zodiacResult)


// jan 20 - Feb 17 aquarius
function zodiacResult () {
    const month = Number(monthInput.value)
    const day = Number(dayInput.value)

        if (month === 1 && day >= 20 || month == 2 && day <= 17) {
            result.innerText = 'AQUARIUS'
        }
// feb 18 - march 19 pisces
        if (month === 2 && day >= 18 || month == 3 && day <= 19) {
            result.innerText = 'PISCES'
        }
// march 20 - april 19 aries
        if (month === 3 && day >= 20 || month == 4 && day <= 19) {
            result.innerText = 'ARIES'
        }
// april 20 - may 20 taurus
        if (month === 4 && day >= 20 || month == 5 && day <= 20) {
            result.innerText = 'TAURUS'
        }
// may 21 - june 20 gemini
        if (month === 5 && day >= 21 || month == 6 && day <= 20) {
            result.innerText = 'GEMINI'
        }
// june 21 - july 21 cancer
        if (month === 6 && day >= 21 || month == 7 && day <= 21) {
            result.innerText = 'CANCER'
        }
// july 22 - aug 22 leo
        if (month === 7 && day >= 22 || month == 8 && day <= 22) {
            result.innerText = 'LEO'
        }
// aug 23 - sept 22 virgo
        if (month === 8 && day >= 23 || month == 9 && day <= 22) {
            result.innerText = 'VIRGO'
        }
// sept 23 - oct 22 libra
        if (month === 9 && day >= 23 || month == 10 && day <= 22) {
            result.innerText = 'LIBRA'
        }
// oct 23 - nov 21 scorpio
        if (month === 10 && day >= 23 || month == 11 && day <= 21) {
            result.innerText = 'SCORPIO'
        }
// nov 22 - dec 20 sagittarius
        if (month === 11 && day >= 22 || month == 12 && day <= 20) {
            result.innerText = 'SAGITTARUIS'
        }
// dec 21 - jan 19 capricorn
        if (month === 12 && day >= 21 || month == 1 && day <= 21) {
            result.innerText = 'CAPRICORN'
        }
}