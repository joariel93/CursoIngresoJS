function mostrar() {

	var contador = 0;
	var positivo = 0;
	var negativo = 1;
	var respuesta = 'si';
	var num;

	do {
		num = parseInt(prompt("Por favor ingrese un número"));
		while (isNaN(num)) {
			num = parseInt(prompt("Error. Por favor ingrese un número"));
		}
		if (num >= 0) {
			positivo = num + positivo;

		} else {
			negativo = num * negativo;
		}
		respuesta = prompt("Desea continuar? si/no");
		while (respuesta != 'si' && respuesta != 'no') {
			respuesta = prompt("Error. Por favor conteste la pregunta si o no");
		}
	} while (respuesta == 'si');
	document.getElementById('suma').value = positivo;
	document.getElementById('producto').value = negativo;

}//FIN DE LA FUNCIÓN