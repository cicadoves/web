var box = document.getElementById('box');
//var box2 = document.getElementById('box2');
var res = document.getElementById('res');
var table = document.getElementById('table');

function check() {
	if (box.checked) {
		x = '-';
//		args = ['a', 'b', 'c'];
	} else {
		x = '+';
//		args = ['x', 'y', 'z'];
	}
//	column(args)

//	if (box2.checked) {
//		args = ['d', 'e', 'f'];
//	} else {
//		args = ['u', 'v', 'w'];
//	}
//	column2(args)
	setsym(x)
}

function calc() {
	a = table.rows[0].cells[0].innerHTML;
	b = table.rows[0].cells[2].innerHTML;
	if (box.checked) {
		result = a - b;
	} else {
		result = a + b;
	}
	res.innerHTML = 'Result: ' + result;
}

//function column(args) {
//	for (var i = 0; i < table.rows.length; i++) {
//		table.rows[i].cells[0].innerHTML = args[i];
//	}
//}

//function column2(args) {
//	for (var i = 0; i < table.rows.length; i++) {
//		table.rows[i].cells[1].innerHTML = args[i];
//	}
//}

function setsym(x) {
	table.rows[0].cells[1].innerHTML = x;
}
