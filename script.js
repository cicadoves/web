var box = document.getElementById('box');
var table = document.getElementById('table');

function check() {
	if (box.checked==true) {
		col('-1');
	} else {
		col('-2');
	}
}

function col(text) {
	for (const i of Array(table.length+1).keys()) {
		table.rows[i].cells[0].innerHTML = text;
	}
}
