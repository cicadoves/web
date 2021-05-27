var x = document.getElementById('first')
var y = document.getElementById('second')
var z = document.getElementById('h')
f = document.getElementById('calc')

calc.addEventListener('submit', function(e){
  alert('smh')
  e.preventDefault()
  z.innerText = 'ans: ' + (parseFloat(x.value) + parseFloat(y.value))
})