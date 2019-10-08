// Scripter une fonction qui prends un texte en argument, pour qu'elle compte chaque occurence de chaque lettre presente dans "texte"
function countThatShit (texte) {
    let charzIn = new Map();
    for (let char of texte){
        if(!charzIn.has(char)) {
            charzIn.set(char,1);
        }
        else {
            let howMuch = charzIn.get(char);
            charzIn.set(char,howMuch+1);
        }
    }
    let restit = [];
    let keys = charzIn.keys(charzIn);
    for (each of keys) {
        let item = [];
        item.push(each);
        item.push(charzIn.get(each));
        restit.push(item);
    }
    //console.log("debug :",restit[1]); - prends bien la comprehension de liste, la syntaxe est juste niquée lors de la conversion en string
    return restit.toString();
}
texte = "jfoaihjfo ajnfoahngoh aljnfanvanvkl";
console.log("comptage = ",countThatShit(texte));

// faire une fonction pour verifier si un mot donné est un palindrome (code donné erroné, a corriger)
function palindrome(mot) {
    let i = 0;
    let j = mot.lenght -1;
    console.log("debug=",mot[i],mot[j]);
    while (i !== j){
        if(mot[i] != mot[j]) {
            return false;
            console.log(mot,"n'est pas un palindrome");
            break;
        }
        i = i+1;
        j = j-1;
        console.log("debug=",mot[i],mot[j]);
    }
}

testmot = "palindrome";
console.log("est-ce que ", testmot, "est un palindrome ? ", palindrome(testmot));

// exercice recursif : coder la fonction de fibonacci ->
// definition wikipedia:
// entrée : un nombre entier n
// sortie : le terme de rang n de la suite de Fibonacci
//fonction fibo(n)
//     si n ≤ 1 // deux premiers cas : fibo(0) est égal à 0 et fibo(1) est égal à 1
//           renvoyer n
//     sinon // récurrence à partir du terme de rang 2
//           renvoyer fibo(n - 1) + fibo(n - 2)
//
// BONUS : afficher des lapins plutot qu'un resultat (les emoji etant unicode, on peut les utiliser comme des str)
//console.log("🐰".repeat(2));
function fibo(n) {
    let count = n;
    if (count<=1) {
        return count;
    }
    else {
        return fibo(count-1) + fibo(count-2);
    }
}
// Autre forme v.prof : 
const fib = (n) => {
    if (n <= 1) {
        return n;
    }
    return fib(n-1) + fib(n-2);
}

let nb_base = 10; // gaffe a la memoire !
console.log("🐰".repeat(fibo(nb_base)));
console.log("🐰".repeat(fib(nb_base)));