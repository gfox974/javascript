// Ici, definition de la fonction pour changer d'icone selon moment de la journee
let changeDaytime = (hour) => {
    let curPhase = document.getElementById("dayphase");
    //let dummyTime = 1;
    //if ( dummyTime >= 18){
    if ( hour >= 18){
        if (hour <= 6) {
            curPhase.classList.replace("suntime","moontime");
        }
    } else {
        curPhase.classList.replace("moontime","suntime");
    }
    console.log("changeDaytime triggered");
}

// Ici, event de la requete
let getTime = document.getElementById("getTime");
// Ici on build le dictionnaire ville / tz (on pourrait build le dico en recuperant les tz/ville direct sur l'api, mais flemme, du coup on va taper les ressources connues telles quelles)
let cityZones = new Map();
    cityZones.set("Paris","Europe");
    cityZones.set("New_York","America");
    cityZones.set("London","Europe");
    // etc, etc ..

getTime.addEventListener('click',() => {
    let ville = document.getElementById("inputZone").value;
    // on pourrait réecrire la valeur récuperée en input de maniere a ce que la requete corresponde a la syntaxe des ressources, genre Londres -> London (flemme)
    let zone = cityZones.get(ville);
    console.log("click triggered, invalue =",ville);
    const api_url = `http://worldtimeapi.org/api/timezone/${zone}/${ville}`;
    console.log("getting = ",api_url);
    async function get() {
        const response = await fetch(api_url);  
        let data = await response.json();
        let { datetime } = data;
        console.log("response value =",datetime);
        let timeNow = document.getElementById('horaire').innerText = datetime.substring(11, 19);
        console.log(timeNow);
        console.log("onlyhour =",timeNow.substring(0,2));
        changeDaytime(timeNow.substring(0,2)); // ici on declenche le changement d'icone si besoin
    }
    get();
});

// Ici, le gettime au load selon l'ip
function getTimeDefault() {
    const api_url = `http://worldtimeapi.org/api/ip`;
    async function get() {
        const response = await fetch(api_url);  
        let data = await response.json();
        let { datetime } = data;
        let timeNow = document.getElementById('horaire').innerText = datetime.substring(11, 19);
        changeDaytime(timeNow.substring(0,2));
        console.log("default gettime triggered");
    }
    get();
};
getTimeDefault();

// Ici, le onclick sur un des trois boutons de sizing, et changement de classe body selon id du bouton cliqué
// Test crade :
let corps = document.getElementById("togglable");
// bouton norm
document.getElementById("toggleNorm").addEventListener("click", () => {
    if (corps.classList.value.match("font-med")) {
        corps.classList.replace("font-med","font-norm");
        console.log("triggered med to norm");
    }
    else if (corps.classList.value.match("font-large")) {
        corps.classList.replace("font-large","font-norm");
        console.log("triggered large to norm");
    }
    else {
        console.log("already norm");
    }
})
// bouton med
document.getElementById("toggleMed").addEventListener("click", () => {
    if (corps.classList.value.match("font-norm")) {
        corps.classList.replace("font-norm","font-med");
        console.log("triggered norm to med");
    }
    else if (corps.classList.value.match("font-large")) {
        corps.classList.replace("font-large","font-med");
        console.log("triggered large to med");
    }
    else {
        console.log("already med");
    }
})
// bouton large
document.getElementById("toggleLarge").addEventListener("click", () => {
    if (corps.classList.value.match("font-norm")) {
        corps.classList.replace("font-norm","font-large");
        console.log("triggered norm to large");
    }
    else if (corps.classList.value.match("font-med")) {
        corps.classList.replace("font-med","font-large");
        console.log("triggered med to large");
    }
    else {
        console.log("already large");
    }
})