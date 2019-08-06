function mostrar() {
    var contVar;
    var promedio;
    var min;
    var minS;
    var nota;
    var sexo;
    var notas = 0;
    var flag = 0;
    var sex;
    var i;
    for (i = 0; i < 5; i++) {
        nota = parseInt(prompt("Por favor ingrese la nota. (entre 0 y 10)")).toFixed(2);
        while (!(nota>=0&&nota<=10)) {
            nota = parseInt(prompt("Error por favor ingrese un número entre 0 y 10.")).toFixed(0);
        }

        sexo = prompt("por favor ingrese el sexo. (m/f)");
        while (sexo != 'm' && sexo != 'f') {
            sexo = prompt("Error por favor ingrese m o f.");
        }
        notas = notas + nota;
        if (sexo == 'm' && nota >= 6) {
            contVar++;
        }
        if (flag == 0 || nota < min) {
            min = nota;
            minS = sexo;
            if (sexo == 'f') {
                sex = " una mujer";
            } else {
                sex = " un varon";
            }
        }



    }
    promedio = (notas / 5);

    alert("El promedio de las notas ingresadas es " + promedio+"\nLa nota más baja ha sido " + min + " y fue de" + sex);
   
}
