var box1 = document.getElementById('box1');
var box2 = document.getElementById('box2');
var table = document.getElementById('table');

function check() {
	if (box1.checked) {
		col('check', 0);
	} else {
		col('', 0);
	}

	if (box2.checked) {
		col('check', 1);
	} else {
		col('', 1);
	}
}

function col(text, col) {
	for (var i = 0; i < table.rows.length; i++) {
		table.rows[i].cells[col].innerHTML = text;
	}
}
