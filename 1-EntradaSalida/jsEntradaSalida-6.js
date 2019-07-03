/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
var n1;
var n2;
var resultado;
var n1=parseInt(document.getElementById("numeroUno").value);
var n2=parseInt(document.getElementById("numeroDos").value);
resultado=n1+n2;
alert("La suma es "+resultado);
}

