/*3- Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random 
para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. 
Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, 
repitiendo 50 veces esta operación.*/

const min = 1;
const numeroTiradas = 50;
const max = 6;
const dados = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]
const apariciones = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];


for (let i = 0; i < numeroTiradas; i++) {

    let dado1 = Math.floor(Math.random() * (max - min + 1)) + min;
    let dado2 = Math.floor(Math.random() * (max - min + 1)) + min;
    let suma = dado1 + dado2;
    apariciones[suma - 1]++;

}

filas = dados.length;
document.write('<table border="1" style="border-collapse: collapse;margin:20px auto; width:500px;height:500px; text-align: center;">');

// Agregar la cabecera
document.write('<thead>');
document.write('<tr>');
document.write('<th>Dados🎲🎲</th>');
document.write('<th>Apariciones</th>');
document.write('</tr>');
document.write('</thead>');

// Generar las filas
document.write('<tbody>');
for (let f = 0; f < filas; f++) {
    document.write('<tr>');
    document.write('<td>' + dados[f] + '</td>');
    document.write('<td>' + apariciones[f] + '</td>');
    document.write('</tr>');
}
document.write('</tbody>');

document.write('</table>');


