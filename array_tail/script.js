//Creiamo un array chiedendo all'utente quanti elementi dovrà contenere e generando tanti numeri casuali 
//(compresi nell'intervallo da 1 a 100) per quanti sono gli elementi da inserire.
//Stampiamo poi gli ultimi 5 elementi dell'Array

let userNumber = parseInt(prompt("Quanti elementi vuoi inserire nella lista?"));

// we continue by creating the empty list
let userList = [
];

// we do a for loop defined by the user prompt
for (let i = 0; i <= userNumber; i++) {
    //console.log(i,'index');
    let random =  getRndInteger(1,100);
    console.log(random,'random');
    userList.push(random);
};

let userEndList = parseInt(prompt("quanti elementi vuoi selezionare dalla fine?"));
let newArray = userList.slice(-userEndList);

if (isNaN(userEndList)) {
    console.log(userEndList);
}
console.log(newArray);
