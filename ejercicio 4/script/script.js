/*4- Escribir el código de una función a la 
que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el 
número es par o impar. Mostrar por pantalla el resultado devuelto por la función.*/

function parImpar(num) {
    if (num % 2 === 0) {
        return 'El número ' + num + ' es par.';
    } else {
        return 'El número ' + num + ' es impar.';
    }
}

let valido = false;
let numero;

do {
    numero = prompt('Ingrese un numero');

    if (!isNaN(numero)) {
        valido = true;
    } else {
        alert('Debe ingresar un número entero valido.');
    }
} while (!valido);


console.log(parImpar(numero));