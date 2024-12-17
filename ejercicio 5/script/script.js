/*5- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. 
A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, 
sólo por minúsculas o por una mezcla de ambas.*/

function verificoSrting(texto) {

    // paso a mayuscula y comparo
    let auxMayus = texto.toUpperCase();

    if (auxMayus === texto) {
        return `El texto ${texto} esta en mayuscula`;
    }

    let auxMin = texto.toLowerCase();

    if (auxMin === texto) {
        return `El texto ${texto} esta en minuscula`;
    }

    return `El texto ${texto} es una mezcla de mayusculas y minusculas`;

}

let valido = false;
let texto = "";
do {
    texto = prompt("Ingrese un texto:");

    if (texto.trim() === "") {
        alert("No se puede ingresar un texto vacío");
    } else {
        valido = true;
    }


} while (!valido)
console.log(verificoSrting(texto));