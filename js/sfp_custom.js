var modal = document.getElementById('cbModal');
var btn = document.getElementById("cbBtn");
var span = document.getElementsByClassName("closeX")[0];

btn.onclick = function(){
	modal.style.display="block";
}

span.onclick = function(){
	modal.style.display="none";
}

window.onclick = function(){
	if (event.target == modal){
		modal.style.display="none";
	}
}
