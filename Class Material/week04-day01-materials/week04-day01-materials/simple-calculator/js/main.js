let total = 0

document.querySelector('#pumpkin').addEventListener('click', pumpkin)
document.querySelector('#dominosPizza').addEventListener('click', jumanji)
document.querySelector('#zebra').addEventListener('click', nineClub)
document.querySelector('#cantThinkOfAnything').addEventListener('click', cantThinkOfAnything)
document.querySelector('#turtle').addEventListener('click', turtle)
document.querySelector('#dog').addEventListener('click', dog)


function pumpkin() {
  total = total + 0
  document.querySelector('#placeToPutResult').innerText = total
}

function jumanji() {
  total = total + 3
  document.querySelector('#placeToPutResult').innerText = total
}

function nineClub() {
  total = total + 9
  document.querySelector('#placeToPutResult').innerText = total
}

function cantThinkOfAnything() {
  total = total - 2
  document.querySelector('#placeToPutResult').innerText = total
}

function turtle() {
  total = total - 5
  document.querySelector('#placeToPutResult').innerText = total
}

function dog() {
  total = total * 2
  document.querySelector('#placeToPutResult').innerText = total
}