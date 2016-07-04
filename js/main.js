var textarea = document.getElementById("text-area");
var row = document.getElementById("row");
function aparecer_tarea () {
	if (textarea.value.length > 0) {
		var tareAsig = document.createElement("div");
		tareAsig.setAttribute("class","col-xs-8 col-xs-offset-2 lista");
		var label = document.createElement("label");
		var input = document.createElement("input");
		var icono = document.createElement("i");
		var iconostar = document.createElement("i");
		var a = document.createElement("a");
		var b = document.createElement("a");
		input.setAttribute("type","checkbox");
		input.setAttribute("class","col-xs-3");
		label.setAttribute("class","col-xs-7");
		icono.setAttribute("class", "fa fa-trash peque");
		iconostar.setAttribute("class", "fa fa-star-o peque");
		a.setAttribute("href", "#");
		b.setAttribute("href", "#");
		a.appendChild(icono);
		b.appendChild(iconostar);
		tareAsig.appendChild(input);
		tareAsig.appendChild(label);
		tareAsig.appendChild(b);
		tareAsig.appendChild(a);
		label.innerHTML = textarea.value;
		row.appendChild(tareAsig);
		textarea.value = "";
		icono.onclick = function(){
			row.removeChild(tareAsig);

		}
		input.onchange = function(){
			this.nextSibling.setAttribute("class","tachado")
		}
		// var cambioStar = 0;
		// if (cambioStar = 0) {
		
		// }

	}else{
		alert("por favor añada su tarea");
	}
}