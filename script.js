var box = document.getElementById('box');
var table = document.getElementById('table');

function check() {
	if (box1.checked) {
		writecol('1');
	} else {
		writecol('0');
	}
}

function writecol(text) {
	for (var i = 0; i < table.rows.length; i++) {
		table.rows[i].cells[0].innerHTML = text;
	}
}
