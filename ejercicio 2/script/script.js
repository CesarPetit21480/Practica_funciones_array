/*2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

●	Mostrar la longitud del arreglo.
●	Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
●	Añade en última posición la ciudad de París.
●	Escribe por pantalla el elemento que ocupa la segunda posición.
●	Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.
*/

let cities = [];

while (true) {
    const city = prompt('Ingrese una ciudad (o cancelar para terminar):');

    if (city.toLowerCase() === 'cancelar') {
        break;
    }

    cities.push(city);
}


console.log(`\nArray Original`);

for (let i = 0; i < cities.length; i++) {
    console.log(`ciudades : ${i + 1}. ${cities[i]}`);
}

// punto 1

console.log(`\nLongitud del arreglo: ${cities.length}`);

// punto 2

console.log(`Elemento en la posición 1: ${cities[0]}`);
console.log(`Elemento en la posición 3: ${cities[2]}`);
console.log(`Elemento en la posición última: ${cities[cities.length - 1]}`);

// punto 3

cities.push('Paris');

// punto 4

console.log(`Elemento en la posición 2 : ${cities[1]}`);

// punto 5

cities[1] = 'Barcelona';
console.log(`Elemento en la posición 2 modificado: ${cities[1]}`);

console.log(`\nArray Modificado`);

for (let i = 0; i < cities.length; i++) {
    console.log(`ciudades : ${i + 1}. ${cities[i]}`);
}





