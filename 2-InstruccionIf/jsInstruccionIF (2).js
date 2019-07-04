function mostrar()
{
//tomo la edad  

var edad;
var Mayor;

edad=document.getElementById("edad").value;
edad=parseInt(edad);
Mayor=edad>=18
if(Mayor)
{alert("Usted es mayor de edad")}
else
{alert("Usted no es mayor de edad")}
}//FIN DE LA FUNCIÓN