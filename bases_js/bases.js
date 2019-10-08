/* 
contextes d'execution du langage : web, orienté front (navigateur), environnement serveur (node js, backend)
ici, on se sert donc de nodejs pour le debug, ca reste proche de l'execution en browser
 ----- !!!!! Il n'y a pas de notions d'includes ou d'import en javascript pur !!!!!!!!! ----------

--------- SI utilisation env serveur type nodejs, syscall possibles ! ----

*/

/* instructions / expressions
exemple : maFonction();
 les expressions se terminent par ; marquant la fin de sequence -> suivante */
 
 /* 1) Types de données importantes :
 nombres, chaines de caracteres, 

 javascript est basique sur sa gestion des nombres, il n'en connais qu'un seul type (codé sur 64 bits, donc prends un max > 65535), mais il prends quand meme les entiers et les décimaux.
 13 ; -> entier
 0.25; -> décimal

 les opérateurs arithmetiques sont les memes que dans les autres langages
1+1;
2-1;
3*3;
9/5;
2 % 1;
( peut donner les resultats d'operations non-entieres )
par defaut js est en base decimales (base 10), mais il peut en utiliser d'autres (hexa, octales (0-7), etc, mais n'est pas fait pour en premier lieu)

accepte aussi le binaire, (se lit de droite a gauche sous forme de puissances de 2)
00000000 = 0
00000001 = 1 (2 puissance 0)
00000010 = 2 (2 puissance 1)
00000011 = 3 

un operateur permet de decaler les bits :
1 << 2; ici on decale le 1 de 2 -> 4

la mise en priorité des operations est prise en compte (parentheses etc)
1+2*3 = 7
(1+2)*3 = 9

Infinity; -> mot clé resultat d'une division par 0 par exemple: 10/0
-Infinity existe aussi, peut representer un resultat de -10/0
evite les crashs

NaN : not a number -> exemple resultat de 0/0

-----
chaines de caracteres :
délimiteurs : "",'',`` (backticks, utilisés pour l'interpolation de variables)
"welcome";
'bienvenue';
`hola`; (depuis es6)
"Da\fuq"; - caractere d'echappement

exemple utilisation backtick :
let nom = "toto";
console.log(`Bonjour ${nom}`);

Concatenation :
console.log(" Bonjour" + nom + " !");


- les booleens : etats vrai et faux -> true / false

--- operateurs logiques :
! -> negation
&&: et logique
||: ou logique
-- operateurs d'egalité ( trois = -> strictement)
10 === 10 -> renvoie true
10 !== 10 -> renvoie false (car n'est pas différent)

on peut aussi comparer les cacacteres :
"X" > "Z" = false, compare la valeur d'index dans la table de caracteres

'la petite maison dans la prairie'[0]; -> récupere la premiere lettre de la chaine de caractere (crade, preferer utiliser une methode)
version methode : 'la petite maison dans la prairie'.charAt(0); - > affichera aussi le l

- sous-chaines de caracteres :
'welcome to the machine'.substring(11,14); -> "the"

'abcd'.lenght -> proprieté -> ici la longueur de la chaine : soit 4


--- autres valeurs prises en compte : null et undefined
undefined est renvoyé lorsqu'une fonction n'est pas definie, par exemple.
null peut etre utilisé pour definir ou detruire un objet, en representant une non-valeur definie

--- notions de symboles (depuis es6)
symbol() : methode permettant de creer un objet unique et immutable (par exemple pour identifier de maniere absolue un objet)
exemple : let identifiant = symbol("toto_lunique");

---------------
2) Variables, tableaux / arrays, objets, dictionnaires / maps, set (ensembles dans le sens mathematiques, pas de doublons possibles)

methodes de declaration :
var = ancienne methode, let : depuis es6
var x = 12; assigne un x d'une valeur de 12.

cette facon n'assigne la variable que dans son contexte global d'execution ( navigateur / fenetre dans javascript, different sur nodejs)

y = 23;
reviens au meme, mais crade.

on peut forcer le mode strict 'use strict' en debut de script, le moteur forcera l'utilisation une syntaxe clean

var uneVariable;
uneVariable; ---> indefinie, car assignée sans valeur

var w = 10, z = 23; decla one liner possible aussi.

---- LET est a privilegier (var = global, let = locale au contexte d'exec du bloc) ----
let unNombre = 10.2;

const uneAutreVariable = 20; --> declarer avec const ne rends pas possible d'initialiser une variable sans valeur

exemple boucle pour voir les differences :

for (var i=0; i<10; i=i+2) { --> ici on met un pas de deux dans l'increment
    console.log(i); --> ici affichage a chaque iteration
}
console.log("i = ", i); --> ici affichage valeur finale en fin d'execution, la variable est donc devenue globale vu qu'elle a pu etre appellée hors du bloc, ce fonctionnement est du à let, la variable utilisée uniquement dans le bloc aurai du etre assignée via "let"
avec var, i existe de maniere globale meme en dehors de son bloc, si on voulait la faire exister hors du scope de la boucle avec let, il faudrait la definir en amont

(let i; --> ici, ca permettrait de la faire exister hors bloc)
for (let i=0;i<10;i++){
    console.log(i); --> OK, car i est defini
}
console.log(i); --> erreur, i non defini.

-- const
const PI = 3.14;
PI = 4; --> crachera une erreur si on tente de réassigner, une constante n'est par definition pas modifiable (pour les types simples)

const table = [1,3]; Dans ce cas, on peut alterer les valeurs du contenu (possible pour les type complexes: tableaux, objet, etc)

--------- notation raccourcie --------
let a = a + 1; peut etre noté --> let b += 1; ( b = b +1)
b -= 1; soit b = b -1
b *= 2 -> b = b * 2
b /= 3 b = b/3
b++ b=b+1
b-- b=b-1

++c -> sera evalué comme le c deja incrémenté ( un peu comme en c, non-recommandé )

let a = 1;
a++ = 2
++a = 4

--------------
- Tableaux : liste d'elements ordonnés, de types indifferents (definis en const, plus performant)
const monTableau = [1.2,3,3,0,null,['a','b','0',true]];

le tableau est indexé, on peut parcourir leurs elements par ce biais.
monTableau[4] -> retourne null

la structure etant dynamique, on peut en modifier le contenu via des methodes
monTableau.pop() -> permet de sortir et renvoyer l'element en bout de tableau (fonctionne sur le principe d'une pile, destructif car la valeur renvoyée sort)
monTableau.push('ajout') -> equivalent d'append, ajoute un element en fin de tableau
monTableau.shift()

monTableau[4] = 'B'; -> remplace null par B


exercice :
soit deux tableaux :
['a','b','c']
['1','2','3']
la fonction "zip" doit renvoyer un tableau (array), qui prends un tableau 1, un tableau 2, et produit un tableau dont le contenu donnerait ['a','1','b','2','c','3']
*/
// 
function zip(a,b){
    const zipRes = [];
    if (a.length === b.length) {
        //si ok ->
        for (let i=0;i<b.length;i++) {
            zipRes.push(a[i],b[i]);
        }
        return zipRes;
    } else {
        console.log("les tableaux doivent avoir la meme longueur d'index");
    }
}
const tab1 = ['a','b','c'];
const tab2 = ['1','2','3'];

result = zip(tab1,tab2);
console.log("Result =", result);

/* Operateurs de destructuration --

Servent a prendre à partir de données structurées ( tableau par exemple ), et en affecter les valeurs à d'autres types de données :
ex:
let [x,y] = [1,2]; -> x=1,y=2
let [a, ,c] = [0,1,2]; -> a=0, non-assignée , c=2 :
On peut utiliser la notion de pattern matching

--------  Objets : Dictionnaires / Maps------------
objet :
let objetVide = {};

ici on va definir un objet dont les propriétés sont des coordonnées dans l'espace :
let monPoint3D = {
    x: 10, -->  clé : valeur,
    y: -2,
    z: 3
};

( l'objet est une structure de données complexe )

Acces à la donnée :
monPoint3D.x; -> renvoie la proprieté x de l'objet
monPoint3D['x']; -> idem, mais à la maniere d'un tableau on tape la proprieté comme un index

modifions x :
monPoint3D.x = 20; la valeur x de l'objet monPoint3D devient 20.
monPoint3D['x'] = 20; idem

----- objets destructurés :
let { x, y , z} = monPoint3D; --> si les variables font appel à des proprieté definies de l'objet, on peut les assigner comme ca (x y z prendront leurs bvaleurs correspondantes dans les proprietés de l'objet appellé)


les dico servent a assigner des données en mode clé / valeur
let myDic = {a:1,b:2,c:3};

le modele de la gestion d'objet de javascript est le modele "prototypage" (pas obligatoire de crée une classe pour etablir un template d'objet)
*/
let client = {
    nom: 'Dudute',
    pseudo: 'Duuuuh',
    age: 28
};
console.log("age de ", client.nom, " : ", client.age);
client.age = client.age + 10;
console.log("nouvelle valeur +10:", client.age);

/* --------- les maps ---------- (depuis es6) ----
Map : clé : valeur
*/
let maMap = new Map(); // création d'une map vide (l'objet, dynamique)
maMap.set('cat','chat');
maMap.set('dog','chien');

console.log(maMap.get('cat')); // retourne "chat", vu qu'on interroge la clé "cat"
maMap.has('dog'); // true ou false comme retour, là on verifie si dog existe dans le dico 
//maMap.set('list',['a','b']);
console.log(maMap.get('list'));

maMap.delete('dog');

// Set : Notion d'ensemble
let alphabet = new Set(['a','b','c']);
// on peut aussi gerer les set avec de la destructuration

// ---- Structures de controles --------- If, Else, Else if, While, Do while, For ---
// exemples de conditionnelles :
let hasard = 3;
if (hasard === 6) {
    console.log("match, hasard = 6");
} else if (hasard === 3 || hasard ===1) {
    console.log("match, 1 ou 3 possible");
} else {
    console.log("hasard pas égal a 6");
}
// simplification :
if (hasard === 6 || hasard === 3 || hasard === 1 ) {
    console.log("OK");
} else {
    console.log("NOK");
}
// ou aussi :
switch(hasard) {
    case 6:
    case 3:
    case 1:
        console.log("OK");
        break;
    default:
        console.log("NOK");
        break; 
}

// exemples de boucles :
// while jusqu'a 10 :
let iter = 0;
//while (iter < 10) {
//    iter = iter+1;
//    console.log(iter); // on pourait aussi tout sauter, ne laisser que la ligne console.log et incrementer via l'output en mode iter++, mais crade.
//}
// idem, mais en do while :
do {
    iter = iter+1;
    console.log(iter);
} while (iter < 10);

// sous cette forme, la verification des conditions n'est pas préalable à l'execution du bloc d'instructions, la condition etant vérifiée apres.

// Boucles for, depuis ES6, on peut faire des for sur des proprietés d'objet
let O = {
    array: ['a','b','c']
}
for (let element of O.array) {
    console.log("element de O.array: ",element);
}

let point= { x:1,y:2,z:3};
for (let coordonnee in point) {
    console.log(coordonnee);
}

let t = [1,2,3];
for (let n in t) {
    console.log(n);
}
// --------- Notions de Fonctions ------------------
// Il est important de factoriser les blocs qui se repetent de maniere procedurale ( creer des fonctions et les appeller, plutot que de se repeter en dur)
// fonctions : execution factorielle, contrairement au sequentiel ( nota bene : il y a l'equivalent des try / rescue / exception aussi en js)

function maFonction(a) {
    result = " je suis le resultat de " + a;
    return result;
}

// on peut aussi definir la fonction direct dans le code comme une constante, au moment où on a besoin de l'appeller, pratique vu qu'on ne peut pas build de librairies
const addition = function(a,b) {
    return a + b;
}

test_a = 2 , test_b = 2;
console.log(addition(test_a,test_b));

// meme forme mais en fléché simplifié, la fleche definis le corps de la fonction
const mult= (a,b) => a * b ; // return direct
console.log(mult(test_a,test_b));

let mult2 = (a,b) => { // la nuance est qu'ici on peut executer des suites d'instructions
    let temp = a * b;
    return temp;
};
console.log(mult2(test_a,test_b));

/// autres exemples de cette syntaxe
let multiplier = (n,x) => n * x ;
console.log(multiplier(5,3));

let triple = (n) => multiplier(n,3); // ici on definit une fonction qui prends un argument et la passe dans une fonction tierce
console.log(triple(10));

// -------- La récursivité ----------
// la factorielle de 5 : 5*4 ->*3 ->*2 ->*1 = 120
// forme mathematique : factorielle = n * factorielle(n-1), si n <2 alors n. (condition d'arret)
let factorielle_iter = (n) => {
    let result= 1; // Dans une multiplication on utilise 1 comme element neutre
    for (i=n;i>1;i--){
        result=result*i;
    }
    return result;
}
console.log(factorielle_iter(5));

// autre forme, non-iterative :
let factorielle_recu = (n) => {
    if (n<2) {
        return n;
    }
    return n * factorielle_iter(n-1);
}

console.log("ICI:",factorielle_recu(4));

facto = "test";
console.log(maFonction(facto));

function somme(liste) {
    let acc = 0;
    for(let i=0;i<liste.lenght;i++) {
        acc += liste[i];
    }
    return acc;
}

toSum = [1,2,3,4,5,6,7,8];
console.log("somme de la liste:",somme(toSum));

// exemple to do : somme de, qui prends a = valeur minimale, b = valeur max, on voudrait la somme des nombres entre a et b
function sumTo(from,to) {
    let sumRes=0;
    for (let i=from;i<=to;) {
        sumRes = sumRes+i;
        i = i+1;    
    }
    return sumRes;
}

let vFrom = 1;
let vTo = 100;
rangeSomme = sumTo(vFrom,vTo);
console.log("resultat sumto: ",rangeSomme); // 5050, good
// on sait que la somme des chiffres entre 1 et 100 donne 5050, ca permet de valider le test

// Correction, autre forme :
function somme2(min,max) {
    let ac = 0;
    let i = min;
    while(i<=max) {
        ac = ac + i;
        i = i+1;
    }
    return ac;
}
console.log("somme2 =",somme2(1,100)); // 5050, good
// Depuis ES6, on peut fournir des valeurs par defauts à des fonctions :
function quelconque(x,y=0) { // Ici, si y n'est pas renseigné, il prendra la valeur de 0 par defaut
    return x+y;
}
let x = 10;
let y = 5;
console.log("quelc sans y=",quelconque(x));
console.log("quelc avec x,y=",quelconque(x,y));

// exemple d'utilisation de la notion de callback, permet de gerer des delais quand une fonction se termine (actions asynchrones, permet de declencher des actions sans attendre que le traitement soit terminé)
// Ici on va donc temporiser une action
function coucou() { // on va utiliser cette fonction en handler du callback, ce qui peut ressembler à de la parallelisation de traitement
    console.log("coucou ! j'suis le callback, j'ai été lancé y'a 5sc.");
}
setTimeout(coucou,5000); // balance coucou dans 5sec.
console.log("Je m'execute pendant le callback alors que je suis apres, t'as vu.");

// autre maniere d'utiliser setTimeout, sans créer de fonction préalable
// on va utiliser la notion de fonction anonyme :
setTimeout(function() { return console.log("nobody expects the spanish inquisition ! (ouais, fonction anonyme)")},6000);
// Les fonctions anonymes peuvent aussi etre utilisées hors cas de callback :
console.log("exec de l'anonyme hors callback :",(function(a,b,c) { return a+b+c; }) (1,2,3));
// l'avantage de creer un contexte spécifique entre () est de cloisonner les variables, pratique pour l'aspect fonctionnel

/////////////////// ------------ Objets / classes -----------
// ( heritage : voir extends et super constructor )
class Chien {
    constructor(name) {
        this.name = name;
        this.pattes = 4;
        this.age = 2;
    }
    aboie() { // <- methode
        console.log(this.name," : woof !");
    }
}

const rex = new Chien("rex"); // objet = instanciation de classe
console.log(rex.name," est un ", rex.type," a : ",rex.pattes, "pattes, et il a ",rex.age," ans.");
rex.aboie();