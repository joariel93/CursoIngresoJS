function mostrar()
{

	var contador=0;
	// declarar variables
	var num;
	var max;
	var min;
	
	var respuesta;
	
	do
	{
		if(contador=0){
			num=parseInt(prompt("Por favor ingrese un número"));
			while(isNaN(num)){
				num=parseInt(prompt("Error. Por favor ingrese un número"));
			}
			max=num;
			min=num;
			contador++;
		}else{
		num=parseInt(prompt("Por favor ingrese un número"));
		while(isNaN(num)){
			num=parseInt(prompt("Error. Por favor ingrese un número"));
		}
		if(num>max){
			max=num;
		}
		if(num<min){
			min=num;	
		}}
	respuesta=prompt("Desea continuar? si o no?");
	while(respuesta!="si"&&respuesta!="no"){
		respuesta=prompt("Error, por favor resonda si desea continuar si o no?");
	}
	}while(respuesta=="si");

document.getElementById("maximo").value=max;
document.getElementById("minimo").value=min;



}//FIN DE LA FUNCIÓN