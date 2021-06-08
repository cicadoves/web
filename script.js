var box = document.getElementById('box');
var table = document.getElementById('table');

function check() {
	if (box.checked) {
		args = ['oniichan', 'yamette', 'and im like yo wtf this is just a string'];
	} else {
		args = ['oneechan', 'iyaa', 'and he is like no no no if else else if'];
	}
	column(args)
}

function column(args) {
	for (var i = 0; i < table.rows.length; i++) {
		table.rows[i].cells[0].innerHTML = args[i];
	}
}
