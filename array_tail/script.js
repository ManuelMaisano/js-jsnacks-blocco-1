//Creiamo un array chiedendo all'utente quanti elementi dovrà contenere e generando tanti numeri casuali 
//(compresi nell'intervallo da 1 a 100) per quanti sono gli elementi da inserire.
//Stampiamo poi gli ultimi 5 elementi dell'Array

let usernumber = parseInt(prompt("Inserire quanti numeri dovrà contenere l'array"));
console.log(usernumber)
let numberToPrint = parseInt(prompt("Quanti elementi dell'array vuoi stamapare?"));

let emptyArray =[];

if(numberToPrint > usernumber) {
    console.log("Errore, non puoi stamapare più elementi di quelli contenuti nell'insieme.");
} else {
    for(let i = 0; i < usernumber; i++) {
        let rndNumber =  getRndInteger(1, 100);
        emptyArray.push(rndNumber);
    } 
    console.log(emptyArray.slice(-numberToPrint));
}

