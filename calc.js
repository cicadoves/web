var inp1 = document.getElementById('inp1');
var inp2 = document.getElementById('inp2');
var out = document.getElementById('out');

add.addEventListener('submit', function(event){
  event.preventDefault();
  val1 = parseFloat(inp1.value);
  val2 = parseFloat(inp2.value);
  sum = val1 + val2;
  out.innerText = sum;
});
