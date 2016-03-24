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

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeX")[0];


function openModal(game) {

	var modal;

	if (game == 'cb') {
		var modal = document.getElementById('cbModal');
	}else if (game == 'tr') {
		var modal = document.getElementById('trModal');
	}else if (game == 'cm') {
		var modal = document.getElementById('cmModal');
	}else if (game == 'sfp') {
		var modal = document.getElementById('showreelModal');
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
