
function mostrar()
{
var ancho;
var largo;
var perimetro;

ancho=parseFloat(prompt("Por favor ingrese el ancho en metros"));
while(isNaN(ancho)){
    ancho=parseFloat(prompt("Error por favor ingrese un número"));
}
largo=parseFloat(prompt("Por favor ingrese el largo en metros"));
while(isNaN(largo)){
    largo=parseFloat(prompt("Error por favor ingrese un número"));
}
perimetro=(ancho*largo).toFixed(2);

alert("El perímetro es "+perimetro+" m²");
}
