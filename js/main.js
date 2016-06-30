// var textarea = document.getElementById("text-area");
// var tarea-asig;
// var almacenador = createElement("div");
// almacenador.setAttribute("class", "col-offset-1 col-10");
// function prueba(){
// 			var node = document.createElement("p");
// 			var text = document.createTextNode("que pasa!!");
// 			node.appendChild(text);
// 			document.getElementById("uno").appendChild(node);
// 		}
function aparecer_tarea () {
	var textarea = document.getElementById("text-area");
	var row = document.getElementById("row");
	if (textarea.value.length > 0) {
		var tareAsig = document.createElement("p");
		var tarea = tareAsig.appendChild(textarea);
		row.appendChild(tarea);
		// document.getElementById("row").appendChild(tarea);
	}else{
		alert("sigue revisando")
	}
	 // body...  
}