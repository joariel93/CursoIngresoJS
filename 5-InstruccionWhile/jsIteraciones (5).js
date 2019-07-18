function mostrar()
{

var sexo = prompt("ingrese f ó m .");
var cont;
while(sexo!="f"&&sexo!="m"){
    alert("Ha ingresado un sexo inválido");
    sexo = prompt("ingrese f ó m .");
}

if(sexo=="f"){
    cont="Femenino";

}else{
    cont="Masculino";
}
document.getElementById('Sexo').value=cont;
}//FIN DE LA FUNCIÓN