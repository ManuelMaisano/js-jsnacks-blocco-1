//Abbiamo un frigorifero pieno di frutta:
//'banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola'  
//C'è anche una pesca sul tavolo, la mettiamo nel frigo.
//Stasera dobbiamo fare un cocktail a base di cocomero: ce l'abbiamo o no in frigo?
//Fasi
//1. creare l'array con la frutta del frigorifero
//2. aggiungere la pesca all'array della frutta
//3. verificare se nell'array di frutta c'è il cocomero:
 //  - se c'è stampiamo: "Trovato! Devo solo preparare il cocktail."
  // - se non lo trovo: "Oh no, devo uscire a comprare il cocomero!"


  const fruit = prompt('scrvi qui il tipo di frutto da cercare')
  console.log(fruit);

// lista frutta
const listFruit = ['banana', 'mela', 'pera', 'ciliegia','cocomero', 'arancia', 'mandarino', 'limone', 'fragola' ];
 console.log(listFruit);



 let cocomero = false; 
for (let i = 0; i < listFruit.length; i++) { 
    let  item = listFruit[i]

    if (fruit === item) { 

        cocomero = true; 
    }
};

if (cocomero === true) { 
    alert('Trovato! Devo solo preparare il cocktail')
} else {
    alert('Oh no, devo uscire a comprare il cocomero!') 
};

let pesca = prompt('aggiungi un frutto al frigo') ;
console.log(pesca);


listFruit.push(pesca);
alert('hai aggiunto il frutto al frigo')
console.log(listFruit);