console.log("Hello");
console.log("World");
let prenom = 'toto \''; // protec carac
let nom ="dugenoux";
console.log(prenom, nom);

//let age = 48;
//console.log(`Mon age est :  ${age + 1}  ans`);

//console.log(typeof age);

const PI = 3.14;
//PI = 6;
// const -> constante, unique / let - variable, ne peut pas surcharger une constante
let result = true;
// operateurs / conditions
//forme classique :
if(result == true) {
    console.log("ok");
} else {
    console.log("nok");
}
// la meme en forme ternaire :
console.log((result)? "OK" : "NOK");

let pass = 0;
do { 
    console.log("pass is at =", pass);
    pass = pass+1;
} while(pass <= 10) {
    console.log("pass exited at =", pass);
}

// conditions
let age = 23;
if(age > 18) {
    console.log("majeur");
} else if (age == 14) {
    console.log("14 ans");
} else if (age < 14 ) {
    console.log("mineur");
} else {
    console.log("dafuq");
}

// test switch case
let lettre = "E";
switch(lettre) {
    case "A":
        console.log("voyelle");
        break;
    case "E":
        console.log("E");
        break;
    default:
        console.log("Défaut");
        break;
}
console.log("sorti du bloc switch");

// exo - dessiner un triangle a coups d'étoiles (sur 4 lignes)
let char = "*";
let row = 0;
while (row < 4){
    row = row + 1;
    if(row == 1 ) {linechar = char; }
    else if(row == 2 ) {linechar = char + char; }
    else if(row == 3 ) {linechar = char + char + char; }
    else if(row == 4 ) {linechar = char + char + char + char; }
    console.log(linechar);
}
console.log("triangle done");

// autre methode ( en boucle imbriquée ):
let n = 4;
for(let i=0; i<n; i++) { // tant que i < n, n++
    let temp = "";
    for(let j=0;j<i+1;j++){ // tant que j < i+1, j++ et concat' de temp = temp+"*"
        temp = temp + "*";
    }
    console.log(temp);
}

// la meme avec le methode repeat()
for (let i=0;i<n;i++) {
    console.log("*".repeat(i+1));
}
console.log("repeat done");

// la meme en decrementant ensuite
for (let i=n;i>0;i--) {
    console.log("*".repeat(i));
}
console.log("repeat decrem done");