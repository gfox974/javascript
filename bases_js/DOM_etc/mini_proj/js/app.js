// Exemple de fetch / promise, utilisation de données recuperées au format json
// Ici on va simplifier en tapant direct sur la ressource en format timezone/ville (mais on pourrait caler aussi la tz sous forme de variable par le biais d'un dico)
let getTime = document.getElementById("getTime");
// on va assigner un observateur d'evenement à l'objet getTime (ici, le bouton afficher gna gna):
getTime.addEventListener('click',() => { // event -> action
    let ville = document.getElementById("inputZone").value;
    console.log("click triggered, invalue =",ville); // là par exmeple chaque click se voit dans le debugger
    // on va recuperer la promesse du serveur distant, et la donnée qui nous interesse au format json ( api : world time api, le datetime concernant la ville en input)
    // todo : interroger l'horaire hh:mm:ss concernant ville via l'api, le restituer dans l'element html
    // dummy - let call_result = "New-York = 23:10:05"; // dummy result
    const api_url = `http://worldtimeapi.org/api/timezone/Europe/${ville}`;
    console.log("getting = ",api_url);
    async function get() {  // on declare la fonction comme etant une fonction asynchrone
        const response = await fetch(api_url); // ici on specifie qu'on attends pas le resultat de l'appel pour executer le reste  
        let data = await response.json(); // par contre on est obligés de specifier l'await meme sur le reformatage du resultat, vu qu'il est en input et que l'appel precedent est en await
        let { datetime } = data; // là on destructure le json pour ne garder que la valeur de l'attribut datetime:
        console.log("response value =",datetime);
        let timeNow = document.getElementById('horaire').innerText = datetime.substring(11, 19);
        console.log(timeNow);
    }
    get();
});




/* -- async / promise -- version dims

let champTexte = document.querySelector('.input-header');
let button = document.querySelector('.btn');
button.addEventListener('click', () => {
    let temp = champTexte.value;
    console.log(temp);
    // TODO : call api world time : 
    const apiUrl= `http://worldtimeapi.org/api/timezone/Europe/${temp}`;
    async function getISS() {
        const reponse = await fetch(apiUrl);
        console.log(reponse);
        const data = await reponse.json();
        console.log(data);
        let {datetime} = data; 
        console.log(datetime);
        let timeZone = document.getElementById('horaire').innerText = datetime.substring(11, 19);
        console.log(timeZone);
    };
    getISS();
}); */
