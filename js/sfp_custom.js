/*
// Get the modal
var modal = document.getElementById('cbModal');

// Get the button that opens the modal
var btn = document.getElementById("box2");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeX")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
	modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
	modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}
*/


function openModal(game) {

	if (game == 'cb') {
		var modal = document.getElementById('cbModal');
		var span = document.getElementById('cbClose')
	} else if (game == 'tr') {
		var modal = document.getElementById('trModal');
		var span = document.getElementById('trClose');
	} else if (game == 'cm') {
		var modal = document.getElementById('cmModal');
		var span = document.getElementById('cmClose');
	} else if (game == 'sfp') {
		var modal = document.getElementById('showreelModal');
		var span = document.getElementById('sfpClose');
	} else if (game == 'necken') {
		var modal = document.getElementById('neckenModal');
		var span = document.getElementById('neckenClose');
	}

	modal.style.display = "block";

	span.onclick = function () {
		modal.style.display = "none";
	}

	window.onclick = function (event) {
		if (event.target == modal) {
			modal.style.display = "none";
		}
	}
}
