/* 
Consegna:
Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.
*/

// inizializzo la lista della spesa
const toBuyList = [
   'pane',
   'pasta',
   'pomodori',
   'insalata',
   'mozzarella',
   'biscotti',
   'caramelle',
   'gelato',
   'vino'
];

// prelevo l'elemento lista dal DOM 
const listElement = document.getElementById('list');

// eseguo un ciclo WHILE che mi stampi gli elementi presenti nella lista
let j = 0;

while (j < toBuyList.length) {
   const toBuy = toBuyList[j];
   listElement.innerHTML += `<li> ${toBuy} </li>`
   
   j ++
}