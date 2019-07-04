function mostrar()
{
//tomo la edad  

var edad;
var niña;
edad=document.getElementById("edad").value;
edad=parseInt(edad);
niña= edad!=15

if(niña)
{
alert("Su edad es "+edad+" años");
}
else
{alert("Niña bonita");
}
}//FIN DE LA FUNCIÓN