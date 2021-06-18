// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array foreach o filter.

const items = [1, 2, 40, 30, 8, 50, 25, 29, 80];

// const a = parseInt(prompt('inserire un numero da 0 a '  + items.length));
// const b = parseInt(prompt('inserire un numero da 0 a ' + items.length + ' ma che sia diverso da prima'));

// const newItems = []; 

const range = items.map((items, a, b) => {
    return items.getRangeArr(items, a, b);
});
console.log(getRangeArr(items, a, b));