/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
    var sueldo;
    var resultado;
    
    sueldo=parseFloat(document.getElementById("importe").value);
    resultado=(sueldo-sueldo*(25/100));
    document.getElementById("resultado").value=resultado;
}
