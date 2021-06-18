// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array foreach o filter.

const items = [1, 2, 40, 30, 8, 50, 25, 29, 80];

let numeroUno = parseInt(prompt('inserire un numero da 0 a '  + (items.length-2)));
let numeroDue = parseInt(prompt('inserire un numero da ' + (numeroUno+1) + ' a ' + (items.length-1) + ' e che sia diverso da prima'));

document.getElementById('testo1').innerHTML = 'hai inserito i numeri ' + numeroUno + ' e ' + numeroDue;

let range = items.filter((element, index) =>{       
    if(index >= numeroUno && index <= numeroDue){
        return element;
    }     
});   
document.getElementById('testo2').innerHTML = 'I valori che hanno la posizione compresa tra i due numeri sono ' + range;









