var box = document.getElementById('box');
var text = document.getElementById('text');

function check() {
	if (box.checked==true) {
		text.innerHTML = 'Checked';
	} else {
		text.innerHTML = 'Unchecked';
	}
}
