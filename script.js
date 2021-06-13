var box = document.getElementById('box');
var res = document.getElementById('res');
var table = document.getElementById('table');

function check() {
	if (box.checked) {
		x = '-';
	} else {
		x = '+';
	}
	table.rows[0].cells[1].innerHTML = x;

//	if (box.checked) {
//		args = ['d', 'e', 'f'];
//	} else {
//		args = ['u', 'v', 'w'];
//	}
//	column(args);
}

function calc() {
	a = parseFloat(table.rows[0].cells[0].text);
	b = parseFloat(table.rows[0].cells[2].text);
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

