/*6- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo,
 luego crear una función para calcular su perímetro y mostrarlo por pantalla.

●	La fórmula del perímetro  es p = 2*(a +b)

Ejemplo: 
Input:
lado A = 24
lado B = 5

Output: 58*/


function CalcularPerimetro(lado1, lado2) {
    let perimetro = 2 * (lado1 + lado2);
    return perimetro;
}

let ladoA;
let ladoB;

while (true) {
    ladoA = parseInt(prompt("Ingrese el lado A del rectángulo: "));
    if (isNaN(ladoA) || ladoA <= 0) {
        alert("Debe ingresar un número positivo para el lado A.");
        continue;
    }
    break;
}

while (true) {
    ladoB = parseInt(prompt("Ingrese el lado B del rectángulo: "));
    if (isNaN(ladoB) || ladoB <= 0) {
        alert("Debe ingresar un número positivo para el lado B.");
        continue;
    }
    break;
}

const perimetro = CalcularPerimetro(ladoA, ladoB);
console.log(`El Perimeto de ladoA: ${ladoA} y ladoB : ${ladoB} es : ${perimetro}`);




