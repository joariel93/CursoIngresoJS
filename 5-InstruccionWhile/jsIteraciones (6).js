function mostrar()
{

	var contador=0;
	var acumulador=0;
	var num=0;

while(contador<5){

	num=parseInt(prompt("Ingrese otro número"));
	acumulador=num+acumulador;
	contador++;
}
document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN