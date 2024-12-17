/*7- Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada con una
función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.*/

function mostrarTablaMultiplicar(number) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${number} x ${i} = ${number * i}`);
    }
}


let numero;
let valido = false;
do {

    numero = prompt("Ingrese un numero para realizar la tabla");

    if (isNaN(numero)) {
        alert("Error: Ingreso invalido, por favor ingrese un numero.");
    }
    else {
        valido = true;
    }
} while (!valido)

mostrarTablaMultiplicar(parseInt(numero));


