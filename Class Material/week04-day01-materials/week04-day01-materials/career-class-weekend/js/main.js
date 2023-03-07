document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value
  
  //Conditionals go here
  if (day== 'monday' || day== 'wednesday' || day== 'friday')
  document.querySelector('#placeToSee').innerText = 'Class Day'

  else if (day === 'saturday' || day=='sunday')
  document.querySelector('#placeToSee').innerText = 'Weekend'

  else if (day === 'tuesday' || day=='thursday')
  document.querySelector('#placeToSee').innerText = 'Career Day'

}
