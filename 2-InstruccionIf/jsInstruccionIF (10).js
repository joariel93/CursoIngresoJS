function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
var num;
num=Math.floor(Math.random()*10+1);
if(num<8){
	alert("Su nota ha sido "+num+ " EXCELENTE");
}	
else if(num>=4){
	alert("Su nota ha sido "+num+ " APROBÓ");
}
else{
	alert("Su nota ha sido "+num+ ", vamos la proxima se puede")
}
}//FIN DE LA FUNCIÓN