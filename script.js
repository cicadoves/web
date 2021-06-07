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
	for (const i of Array(table.rows.length).keys()) {
		table.rows[i].columns[0].innerHTML = text;
	}
}
