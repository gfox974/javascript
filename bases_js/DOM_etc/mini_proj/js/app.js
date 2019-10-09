let getTime = document.getElementById("getTime");
// on va assigner un observateur d'evenement à l'objet getTime (ici, le bouton afficher gna gna):
getTime.addEventListener('click',() => { // event -> action
    let ville = document.getElementById("inputZone").value;
    console.log("click triggered, invalue =",ville); // là par exmeple chaque click se voit dans le debugger
    // on va recuperer la promesse du serveur distant, et la donnée qui nous interesse au format json ( api : world time api, le datetime concernant la ville en input)
    // todo : interroger l'horaire hh:mm:ss concernant ville via l'api, le restituer dans l'element html
    let call_result = "New-York = 23:10:05"; // dummy result

    //caler un delais pour simuler le temps de traitement serveur (test dummy ok)
        document.getElementById("horaire").innerText = call_result;
        // a voir avec un fetch sur la vraie ressource

})