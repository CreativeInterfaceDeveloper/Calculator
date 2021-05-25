
		
function suma(){
// var variableParaUsarEnJavaScript = document.getElementById('ID asignado en elemento HTML');
	var numero_1 = parseFloat(document.getElementById('numero1').value);
	var numero_2 = parseFloat(document.getElementById('numero2').value);
	// var variable JS = parseFloat(tome el elemento HTML con ID (numero x). asigne valor a esta variable JS);
	var resultante = numero_1 + numero_2;

	document.getElementById('resultado').value = resultante;
	// -------------------- |del input | queremos modificar de __ en HTML con este valor JS|
	// modificamos el ID 'resultado' con el resultado de la operacion en JavaScript
	// parseFloat(); función para convertir -Cadenas de texto- a numeros decimales
}


