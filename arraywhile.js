var nombres = []; 
var nombres = ["Luis", "Angel", "Fernando", "Sergio"];
console.log(nombres);
console.log(nombres.length);
console.log(nombres[0]);

// .push();
// Esté metodo añadirá "Uvas" añ final del array
var masNombres = nombres.push("Fernando");
console.log(nombres);

// .pop();
// Eliminará "Uvas" del final
var utlimo = nombres.pop("Luis");
console.log(nombres);

// unshift()
// Añade "Uvas" al inicio
var nuevaLogitud = nombres.unshift("Angel");
console.log(nombres);

// shift()
// Elimina "Manzana" del inico
var borrarNombres = nombres.shift("Fernando");
console.log(nombres);

// .indexOf();
// te dará la posición de ese item en el array
var posicion = nombres.indexOf("Luis"); 
console.log(nombres);
