var box = document.getElementById('box');
var box2 = document.getElementById('box2');
var table = document.getElementById('table');

function check() {
	if (box.checked) {
		args = ['a', 'b', 'c'];
	} else {
		args = ['x', 'y', 'z'];
	}
	column(args)

	if (box2.checked) {
		args = ['d', 'e', 'f'];
	} else {
		args = ['u', 'v', 'w'];
	}
	column2(args)
}

function calc() {
	if (box.checked && !(box2.checked)) {
		alert(table.rows[0].cells[0].innerHTML + table.rows[0].cells[1].innerHTML)
	} else if (box2.checked && !box.checked) {
		alert(table.rows[0].cells[0].innerHTML * table.rows[0].cells[1].innerHTML)
	} else {
		alert('Choose ONLY an operation')
	}

function column(args) {
	for (var i = 0; i < table.rows.length; i++) {
		table.rows[i].cells[0].innerHTML = args[i];
	}
}

function column2(args) {
	for (var i = 0; i < table.rows.length; i++) {
		table.rows[i].cells[1].innerHTML = args[i];
	}
}
