// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array foreach o filter.

const items = [1, 2, 40, 30, 8, 50, 25, 29, 80];

let numeroUno = parseInt(prompt('inserire un numero da 0 a '  + ((items.length)-2)));
let numeroDue = parseInt(prompt('inserire un numero da ' + numeroUno + ' a ' + items.length + ' e che sia diverso da prima'));

console.log(getRange(items, numeroUno, numeroDue));
getRange(items, numeroUno, numeroDue);
function getRange(items, numeroUno, numeroDue){
    
    let range = items.filter((element, index) =>{       
        if(index >= numeroUno && index <= numeroDue){
            return element;
        }        
    });   

    return range;
}







