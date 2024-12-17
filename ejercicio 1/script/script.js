/*
Dificultad:  🟢
1- Crear un array llamado meses y que almacene el nombre de los doce meses del año. Mostrar por pantalla en forma de lista los doce nombres del arreglo.

Output:
 
Dificultad:  🟢🟡

*/

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

for (let i = 0; i < meses.length; i++) {
    console.log(`Mes : ${i + 1}. ${meses[i]}`);
}

