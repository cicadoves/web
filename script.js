var box = document.getElementById('box');
var table = document.getElementById('table').columns[0];

function check() {
	if (box.checked==true) {
		text.innerHTML = 'Checked';
	} else {
		text.innerHTML = 'Unchecked';
	}
}
