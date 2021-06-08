var box = document.getElementById('box');
var table = document.getElementById('table');

function check() {
	if (box.checked) {
		args = ['oniichan', 'yamette'];
	} else {
		args = ['oneechan', 'iyaa'];
	}
	column(args)
}

function column(args) {
	for (var i = 0; i < table.rows.length; i++) {
		table.rows[i].cells[0].innerHTML = args[i];
	}
}
