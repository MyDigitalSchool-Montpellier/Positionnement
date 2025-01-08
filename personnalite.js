//Début de l'importation des éléments, ils sont grouper par ordre de passage, donc il y a le groupe des questions, le groupe des premiers résultats, les résultats des divergents et les deuxièmes divergents si il y à.

const commencement = document.getElementById("commencement")

const question1 = document.getElementById("question1")
const question2 = document.getElementById("question2")
const question3 = document.getElementById("question3")
const question4 = document.getElementById("question4")
const question5 = document.getElementById("question5")

const resultatDev = document.getElementById("resultat-dev")
const resultatCrea = document.getElementById("resultat-crea")
const resultatMarket = document.getElementById("resultat-market")
const resultatDivergent = document.getElementById("resultat-divergent")

const devDivergent = document.getElementById("dev-divergent")
const creaDivergent = document.getElementById("crea-divergent")
const marketDivergent = document.getElementById("market-divergent")

const maisAussi = document.getElementById("mais-aussi")

const devDivergent2 = document.getElementById("dev-divergent2")
const creaDivergent2 = document.getElementById("crea-divergent2")
const marketDivergent2 = document.getElementById("market-divergent2")

//Fin de l'imporation des éléments souhaités.

//Passage du commencement à la question 1, on utilisera le format de commentaire suivant : commencement >> question 1.
function toggleQuest1() {
    commencement.style.display = "none";
    question1.style.display = "block";
}

//Création des 3 tables pour stocker le nombre de réponse.
let devTab = []
let designTab = []
let marketTab = []


//Voici le format de vérification des réponses, et donc question 1 >> question 2.
function passageQuestion1(){
    let dev1 = document.querySelector('input[id="check_dev1"]:checked')    //Vérification de quelle réponses est sélectionnée.
    let design1 = document.querySelector('input[id="check_design1"]:checked')
    let market1 = document.querySelector('input[id="check_market1"]:checked')

    if ((dev1 == null) & (design1 == null) & (market1 == null)){
        alert("Veuillez selectionner une réponse.")      //Si aucune réponses n'est validée, alors cela affichera une alerte
    } else {    //Ici on envoie un valeur au tableau souhaité afin de comparé la longueur des tableaux finaux pour afficher les bonnes réponses.
        if (dev1 !== null){
            devTab.push("1")
        } else if (design1 !== null){
            designTab.push("1")
        } else {
            marketTab.push("1")
        }
        question1.style.display = "none";
        question2.style.display = "block";
        console.log(devTab, designTab, marketTab)
    }
}


//Question 2 >> question 3.
function passageQuestion2(){
    let dev2 = document.querySelector('input[id="check_dev2"]:checked')
    let design2 = document.querySelector('input[id="check_design2"]:checked')
    let market2 = document.querySelector('input[id="check_market2"]:checked')

    if ((dev2 == null) & (design2 == null) & (market2 == null)){
        alert("Veuillez selectionner une réponse.")
    } else {
        if (dev2 !== null){
            devTab.push("2")
        } else if (design2 !== null){
            designTab.push("2")
        } else {
            marketTab.push("2")
        }
        question2.style.display = "none";
        question3.style.display = "block";
        console.log(devTab, designTab, marketTab)
    }
}

//Question 3 >> question 4.
function passageQuestion3(){
    let dev3 = document.querySelector('input[id="check_dev3"]:checked')
    let design3 = document.querySelector('input[id="check_design3"]:checked')
    let market3 = document.querySelector('input[id="check_market3"]:checked')

    if ((dev3 == null) & (design3 == null) & (market3 == null)){
        alert("Veuillez selectionner une réponse.")
    } else {
        if (dev3 !== null){
            devTab.push("3")
        } else if (design3 !== null){
            designTab.push("3")
        } else {
            marketTab.push("3")
        }
        question3.style.display = "none";
        question4.style.display = "block";
        console.log(devTab, designTab, marketTab)
    }
}


//Question 4 >> question 5.
function passageQuestion4(){
    let dev4 = document.querySelector('input[id="check_dev4"]:checked')
    let design4 = document.querySelector('input[id="check_design4"]:checked')
    let market4 = document.querySelector('input[id="check_market4"]:checked')

    if ((dev4 == null) & (design4 == null) & (market4 == null)){
        alert("Veuillez selectionner une réponse.")
    } else {
        if (dev4 !== null){
            devTab.push("4")
        } else if (design4 !== null){
            designTab.push("4")
        } else {
            marketTab.push("4")
        }
        question4.style.display = "none";
        question5.style.display = "block";
        console.log(devTab, designTab, marketTab)
    }
}



//Pour choisir notre résultat final, nous allons comparé la longueur de nos 3 tableaux qui sont désormais remplis. Si un tableau obtient 4 réponses ou plus, alors ce sera la réponse précise qui sera affichée. Exemple : si il y a 4 éléments dans le tableau dev et 1 élément dans le tableau market, alors la réponse dev sera affichée.
//Si il y a moins de 4 réponses identiques, alors le résultat divergent apparait.
//Si il y a 3 réponses identiques dans un tableau, en plus du résultat divergent apparait la dominante des tableaux. Exemple : 3 réponses dev, 1 réponse crea et 1 réponse market, alors ce sera le résultat dev affiché.
//Pour 2 fois 2 réponses identiques dans deux tableaux, le résultat sera divergent avec les deux tableaux dominants. Exemple : 1 dev, 2 crea et 2 market, ce sera crea et market d'afficher.

//Question 5 >> Résultat final.
function passageQuestion5(){
    let dev5 = document.querySelector('input[id="check_dev5"]:checked')
    let design5 = document.querySelector('input[id="check_design5"]:checked')
    let market5 = document.querySelector('input[id="check_market5"]:checked')

    if ((dev5 == null) & (design5 == null) & (market5 == null)){
        alert("Veuillez selectionner une réponse.")
    } else {
        if (dev5 !== null){
            devTab.push("5")
        } else if (design5 !== null){
            designTab.push("5")
        } else {
            marketTab.push("5")
        }
        question5.style.display = "none";
        window.scrollTo(0, 0);

        if (devTab.length >= 4){
            resultatDev.style.display = "block"
            console.log("truc")
        } else if (designTab.length >= 4){
            resultatCrea.style.display = "block"
            console.log("crea")
        } else if (marketTab.length >= 4) {
            resultatMarket.style.display = "block"
            console.log("market")
        } else {
            resultatDivergent.style.display = "block"
            if ((3 >= devTab.length) && (devTab.length >=2)){
                devDivergent.style.display = "block"
                console.log("on rentre")
                if ((marketTab.length <= 1) && (designTab.length <= 1)){
                    return
                } else {
                    if (designTab.length > marketTab.length){
                        maisAussi.style.display = "block"
                        creaDivergent2.style.display = "block"
                    } else {
                        maisAussi.style.display = "block"
                        marketDivergent2.style.display = "block"
                    }
                }
            } else if ((3 >= designTab.length) && (designTab.length >=2)){
                creaDivergent.style.display = "block"
                console.log("on rentre1")
                if ((marketTab.length <= 1) && (devTab.length <= 1)){
                    return
                } else {
                    if (marketTab.length > devTab.length){
                        maisAussi.style.display = "block"
                        marketDivergent2.style.display = "block"
                    } else {
                        maisAussi.style.display = "block"
                        devDivergent2.style.display = "block"
                    }
                }
            } else {
                marketDivergent.style.display = "block"
                console.log("on rentr3e")
                if ((designTab.length <= 1) && (devTab.length <= 1)){
                    return
                } else {
                    if (designTab.length > devTab.length){
                        maisAussi.style.display = "block"
                        creaDivergent2.style.display = "block"
                    } else {
                        maisAussi.style.display = "block"
                        devDivergent2.style.display = "block"
                    }
                }
               
            }
        }
        console.log(devTab, designTab, marketTab)
    }
}
