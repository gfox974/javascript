// Ici nous allons modifier de facon dynamique des elements de la page via l'api (dom)
//const texte_1 = document.getElementById("test");
//texte_1.innerText = "Boobies !"; // -> là, on a remplacé "Coucou !" du html, par cette chaine

//document.getElementById("bla").innerText="Bordel."; // la meme en one line

//let temp = document.getElementsByClassName("titre");
//temp[0].innerHTML = "Mes Titres"; // changement de la valeur des elements classe "titre", on modifie donc un ensemble
//console.log(temp); // -> dans ces cas là, le console log se fait dans le debugger du browser

//let paragraphes = document.getElementsByTagName("p");
//console.log(paragraphes);
//document.body.insertBefore(document.getElementById("second"),document.getElementById("first"));
// OU :
//document.body.insertBefore(paragraphes[1],paragraphes[0]);
// meme resultat, mais plus lisible

function changeOrdre() {
    let paragraphes = document.getElementsByTagName("p");
    document.body.insertBefore(paragraphes[1],paragraphes[0]);
}
changeOrdre();
setTimeout(changeOrdre,1000); // callback
setInterval(changeOrdre,2000); // boucle

let changeImage = () => { // ici on va remplacer une image par un texte
    let image = document.getElementById("dp");
    let texte = document.createTextNode("TADA !");
    image.parentNode.replaceChild(texte,image);
}

//changeImage();

// On va utiliser une methode plus pratique, à la maniere de css : queryselector pour les p span latin
// ( il y a aussi une forme de DOM pour le css )

let changeColor = () => {
    // changer la couleur des elements p .latin
    let elements = document.querySelectorAll("p .latin"); // ici on s'adresse directement par rapport au contenu du css
    console.log(elements.length); // ici on peut voir combien correspondent
    for (ele of elements){ // par ce biais, on voit qu'element est un tableau d'objets
        console.log(ele);
        ele.classList.replace("latin","new"); // La on remplace la classe de ceux ciblés
    }
}

setTimeout(changeColor,10000);
/* Evite de se faire chier avec des gros blocs genre :
let latinItem = document.getElementsByClassName("latin");
if (latinItem.parentNode == "p") {

}*/


