var OPERANDO1;
function introducirUno(){
	var uno = document.getElementById('resultado');
	uno.innerHTML += "1";
}

function introducirCero(){
	var cero = document.getElementById('resultado');
	cero.innerHTML += "0";
}

function siguienteOperando(){
	var operando = document.getElementById('resultado');
	OPERANDO1 = operando.innerHTML;
	operando.innerHTML = "";
}

function resultado(){
	var operando = document.getElementById('resultado');
		operando = operando.innerHTML;
		OPERANDO1 = parseInt(OPERANDO1,2)
		operando = parseInt(operando,2);
		var res = OPERANDO1 + operando;
		var resultado = document.getElementById('resultado');
		resultado.innerHTML = parseInt(res).toString(2);
}