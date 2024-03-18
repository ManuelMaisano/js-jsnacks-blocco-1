//Creiamo un array chiedendo all'utente quanti elementi dovrà contenere e generando tanti numeri casuali 
//(compresi nell'intervallo da 1 a 100) per quanti sono gli elementi da inserire.
//Stampiamo poi gli ultimi 5 elementi dell'Array

let usernumber = parseInt(prompt("Inserire quanti numeri dovrà contenere l'array"));

let emptyArray =[];

for (let i = 0; i < usernumber; i++){
    emptyArray.push(getRndInteger(1, 100))
}
if (usernumber < 5){
    console.log('Devi inserire almeno 5 numeri')
 }  else{ 
    let last5items = [emptyArray[emptyArray.length -1], emptyArray[emptyArray.length -2],emptyArray[emptyArray.length -3],emptyArray[emptyArray.length -4], emptyArray[emptyArray.length -5]]
    console.log(last5items, 'Questi sono gli ultimi 5 numeri dell\'array') 
 }
console.log(emptyArray, 'Questo è l\'array completo');