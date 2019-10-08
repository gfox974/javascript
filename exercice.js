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
    //console.log("debug :",restit[1]);//- prends bien la comprehension de liste, la syntaxe est juste niquée lors de la conversion en string
    return restit.toString(); // --> to str, mais restiturion map / array entier direct OK sous node, pas sous debugger
}
texte = "jfoaihjfo ajnfoahngoh aljnfanvanvkl";
console.log("comptage = ",countThatShit(texte));

// faire une fonction pour verifier si un mot donné est un palindrome
let estPalindrome = (mot) => {
    let i = 0, j = mot.length-1; // on definis les points de depart des deux indices qui vont servir a balayer la chaine
    while (i != j) {
        if (mot[i] != mot[j]) {
            return false;
        }
        i++, j--;
    }
    return true;
}

testmot = "ducon";
console.log("est-ce que ", testmot, "est un palindrome ? ", estPalindrome(testmot));

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

// exercice : creer une fonction member qui prends un element en parametre, parcours une liste et retourne vrai si l'element cherché est présent
const memberRecu = (pat,ref) => {
    //if (ref.length === 0){
    if (ref == false){ // ! gaffe a l'absolu du comparo des operateurs, ici ne marchera pas avec 3 =
        return false;
    }
    if (pat === ref[0]){
        return true;
    }
    return memberRecu(pat,ref.slice(1));
}
// version iterative, syntaxe abregée
let memberIter = (element,liste) => {
    if (liste === []) {
        return false;
    }
    for (let i=0;i<liste.length-1;i++) {
        if (element === liste[i]) {
            return true;
        }
    }
    return false;
}

let pattern = 30;
let listref = [1,2,3,4,5,6,7,8,9,10];
console.log("pattern found: ",memberRecu(pattern,listref));
//console.log("pattern found: ",memberIter(pattern,listref))

// corrigé, v.es6 :
// exo compteur d'occurence de lettres sur un tableau associatif
let stats = (texte) => {
    let table = new Map(); // -> instanciation d'objet
    // normalisation des données en input (mise des miniscules -> majuscule, comme ca il n'y aura pas deux compteurs selon la casse)
    let texteNormalise = texte.toUpperCase();
    for (let i=0; i<texteNormalise.length; i++) {
        let lettre = texteNormalise[i]; // stockage de la lettre en cours de lecture -> comparo
        if (table.has(lettre)) {
            // si oui
            table.set(lettre, table.get(lettre)+1);
        } else {
            // si non
            table.set(lettre,1);
        }
    }
    return table; // rendu flingué sous debugger
}

let textsource = "afjfpajfakfo aookapofkakf ZIHROHEF";
console.log("Compte: ",stats(textsource));

// ---- TP -> nodeschool.io ----