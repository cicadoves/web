var box = document.getElementById('box');
var table = document.getElementById('table');

function check() {
	if (box.checked) {
		col('-1');
	} else {
		col('-2');
	}
}

function col(text) {
	for (var i = 0; i < table.rows.length; i++) {
		table.rows[i].cells[0].innerHTML = text;
	}
}
