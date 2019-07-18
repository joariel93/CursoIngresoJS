function mostrar()
{

	var numero = parseInt(prompt("ingrese un número entre 0 y 10."));
	
while(numero<0||numero>10||isNan(numero)){
	alert("El número ingresado no es válido");
	numero = parseInt(prompt("ingrese un número entre 0 y 10."));
}
document.getElementById("Numero").value=numero;

}//FIN DE LA FUNCIÓN