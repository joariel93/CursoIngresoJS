function mostrar() {
    var marca;
    var maxpmarca;
    var peso;
    var sumapeso = 0;
    var contador = 0;
    var maxpeso;
    var minpeso;
    var temperatura;
    var tempares = 0;
    var temfria = 0;
    var seguir;
    var flag = 0;
    var restemp;
    var promedio;

    do {
        marca = prompt("Por favor ingrese la marca del producto");
        peso = parseFloat(prompt("Por favor ingrese el peso entre 1 y 100"));
        while (!(peso >= 1 && peso <= 100)) {
            peso = parseFloat(prompt("Error, por favor ingrese un peso entre 1 y 100"));
        }
        temperatura = parseInt(prompt("Por favor ingrese la temperatura de conservación entre -30 y 30"));
        while (!(temperatura >= (0 - 30) && temperatura <= 30)) {
            temperatura = parseInt(prompt("Error, por favor ingrese una temperatura entre -30 y 30"));
        }
        //Sumo los pesos
        sumapeso = sumapeso + peso;
        //Calculo el resto para confirmar si es par
        restemp = temperatura % 2;
        //Si el resto resulta "0" es par y suma en el contador de los pares
        if (restemp == 0) {
            tempares++;
        }
        //Si la temperatura es menor a "0" suma al contador de los frios
        if (temperatura < 0) {
            temfria++;
        }

        //Corroboro si el peso es un nuevo maximo y lo guardo junto con su marca correspondiente
        if (peso > maxpeso || flag == 0) {
            maxpeso = peso;
            maxpmarca = marca;
        }
        //Corroboro si el peso es un nuevo minimo y lo guardo
        if (peso < minpeso || flag == 0) {
            minpeso = peso;
            flag = 1;
        }


        //Sumo al contador para poder calcular el promedio de pesos
        contador++;
        //Consulto si desea seguir
        seguir = prompt("Desea continuar? si/no");
    } while (seguir != 'no');
    //Calculo el promedio del peso
    promedio = sumapeso / contador;
    document.write("La cantidad de temperaturas pares ingresadas ha sido: "+tempares+"<br>La marca del producto más pesado ingresado es: "+maxpmarca+"<br>La cantidad de productos ingresados que deben conservarse a una temperatura menor a '0' es: "+temfria+
    "<br>El promedio del peso de todos los productos ingresados es: "+promedio+"<br>El peso máximo ingresado fue: "+maxpeso+" y el peso mínimo ingresado fue: "+minpeso );
}