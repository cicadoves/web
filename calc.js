var inp1 = document.getElementById('first');
var inp2 = document.getElementById('second');
var out = document.getElementById('result');

calc.addEventListener('submit', function(event){
  val1 = parseFloat(inp1.value);
  val2 = parseFloat(inp2.value);
  sum = val1 + val2;
  out.innerText = sum;
  event.preventDefault();
});