var x = document.getElementById('first');
var y = document.getElementById('second');
var z = document.getElementById('result')

calc.addEventListener('submit', function(event){
  event.preventDefault()
  sum = parseFloat(x.value) + parseFloat(y.value)
  z.innerText = sum
})