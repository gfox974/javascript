// require ? import ? ------> notions inexistantes en js :(

/*let somme = 0;
/* for(n=1;n<=100;n++) { console.log(n); } */
/*for(n=1;n<=100;n++) { 
    somme=somme+n;
}
console.log(somme); /* equ print */

/*
let test = [1,2,3,4,5,6,7,8,9,10];
for (each of test) { /* ATTENTION SYNTAXE: in parcours l'index, of recupere la valeur dans l'index ..  
    console.log("val =",each);
}/*

/* sample moyenne ( mano a l'ancienne ) */
let liste = [11,12,8];
let somme = 0;
let longueur = 0;

//for(note of liste) {
    // from ; tant que ; do )
for(let i=0; i <= liste.length -1 ; i++) {
    //longueur = longueur+1;
    somme = somme + liste[i];
}
moyenne = somme / liste.length;
//moyenne = somme / longueur;
console.log("sum=",somme,"moy=",moyenne);

// TESTS 
class Test {
    constructor(name, type) { // equ init
        this.name = name;
        this.type = type;
        this.attr1 = 100;
    }
    genRand(bonus) {
        return Math.random() + bonus;
    }
    attValue() {
        return `${this.attr1}`;
    }
}

var testClass = new Test('Dugland','aucun');
let result = testClass.genRand(2);

console.log("Generated:",result,"name=",testClass.name,"att bonus=",testClass.attValue());

let maMap = new Map(); // création d'une map vide (l'objet, dynamique)
maMap.set('cat','chat');
maMap.set('dog','chien');
 let hash = ['toto','titi'];
 console.log(hash);