function mostrar()
{

	var contador=0;
	var acumulador=0;
	var num=0;
	var seguir;

do{

	num=parseInt(prompt("Ingrese un número"));
	while(isNaN(num)){
		num=parseInt(prompt("Error. Por favor ingrese un número"));
	}
	acumulador=num+acumulador;
	contador++;
	seguir= prompt("Desea continuar? s/n");
	while(seguir !="s"&&seguir!="n"){
		seguir=prompt("Por favor conteste la pregunta. s o n");

	}
}while(seguir =="s");
document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;


}//FIN DE LA FUNCIÓN