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
texte = "jfoaihjfo ajnfoahngoh aljnfanvanvkl"
console.log("comptage = ",countThatShit(texte));

// faire une fonction pour verifier si un mot donné est un palindrome (code donné foireux, a corriger)
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