function mostrar() {
    var letra;
    var num;
    var contpar = 0;//Para contar los numeros pares
    var contimp = 0;//Para contar los numeros impares
    var contcero = 0;//Para contar los ceros
    var promedio;//Para calcular el promedio de los positivos
    var sumapositivos = 0;//Para acumular los positivos
    var contposit = 0;//Para contar los positivos
    var sumanegativos = 0;//Para acumular y sumar los negativos
    var max;//Para acumular el maximo
    var letmax;
    var min;//Para acumular el minimo
    var letmin;
    var flag;
    var continuar;//Para salir del do

    do {//Pido datos y los valido
        letra = prompt("Ingrese una letra");
        num = parseInt(prompt("Ingrese un número entre -100 y 100:"));
        while (!(num >= -100 && num <= 100)) {
            num = parseInt(prompt("Error por favor ingrese un número entre -100 y 100:"));
        }
        if (num % 2 == 0) {
            contpar++;
        } else {
            contimp++;
        }
        if (num == 0) {
            contcero++;
        }
        if (num > 0) {
            sumapositivos = sumapositivos + num;
            contposit++;
        } else {
            sumanegativos = sumanegativos + num;
        }
        if (num > max || flag == 0) {
            max = num;
            letmax = letra;
        }
        if (num < min || flag == 0) {
            min = num;
            letmin = letra;
            flag = 1;
        }



continuar=prompt("Desea continuar? si/no");
    } while (continuar != "no");
    promedio = sumapositivos / contposit;

    document.write("a) La cantidad de números pares: " + contpar + "<br>");
    document.write("b) La cantidad de números impares: " + contimp + "<br>");
    document.write("c) La cantidad de ceros: " + contcero + "<br>");
    document.write("d) El promedio de todos los números positivos ingresados: " + promedio + "<br>");
    document.write("e) La suma de todos los números negativos: " + sumanegativos + "<br>");
    document.write("f) El número y la letra del máximo: " + max + "y el mínimo: " + min + "<br>");
}
