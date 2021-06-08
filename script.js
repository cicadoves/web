var box = document.getElementById('box');
var table = document.getElementById('table');

function check() {
	if (box.checked) {
		column('1');
	} else {
		column('0');
	}
}

function column(text) {
	for (var i = 0; i < table.rows.length; i++) {
		table.rows[i].cells[0].innerHTML = text;
	}
}
