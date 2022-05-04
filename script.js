let tab = ["oiseau", "avocat", "kiwi", "fraise", "poire", "chocolat", "orange", "Italie", "koala", "bateau", "Groenland", "stylo", "pain", "grenadine", "chien", "imprimante", "chat", "conceptuellement", "chocolatine", "pain au chocolat", "téléphone", "asticot", "pikachu", "cible", "archer", "bougie", "feuille", "arbre", "nuage", "lumière", "gens", "rue", "voiture", "piéton", "route", "lampadaire", "piquet", "architecture", "panneau", "éclipse", "juste", "git", "soupe", "choux", "farine", "omelette", "écriture", "abécédaire", "organigramme", "artichaut", "épinard", "fermière", "beurre", "laitage", "cabriole", "liste"]

let newTab = []
let list = document.getElementById("list")
let listLi;
let nIntervId;

// TODO gerér les doublons ?
function randomArray(tab) {
    for (let i = 0; i < 10; i++) {
        let rep = Math.ceil(Math.random() * tab.length - 1)
        //console.log(tab.length);
        if(newTab.indexOf(rep) == -1){
            newTab[i] = rep
        } else {
            Math.ceil(Math.random() * tab.length - 1)
        }
        
    }
}

function createLi(list){
    newTab.forEach(element => {
        let li = document.createElement("li")
        li.innerHTML = tab[element]
        list.appendChild(li)
    });
}

function displayList() {
    // check if already an interval has been set up
    flashText()

    if (!nIntervId || nIntervId == null) {
        console.log("start")
        nIntervId = setInterval(stopList, 5000);
    }
}

function flashText() {
    randomArray(tab)
    createLi(list);
}

function stopList() {
    clearInterval(nIntervId);
    // release our intervalID from the variable
    listLi = document.querySelectorAll("li")

    listLi.forEach(e => e.remove())
    nIntervId = null;
}

function validateResp(){
    let validList = document.getElementById("validList")
    createLi(validList);
    let nbRep = 0;

    let inputs = document.querySelectorAll("input")

    inputs.forEach(el => {
        for (let i = 0; i < newTab.length; i++) {
            if(tab[newTab[i]] == el.value){
                nbRep++;
                document.getElementById(el.id).style.borderColor = "green"
            }
        }
    });

    if(nbRep != 0){
        let congrats = document.createElement("p")
        congrats.innerHTML = "Vous avez " + nbRep + " bonnes réponses."
        document.getElementById("responses").appendChild(congrats)
    }
    
}

document.getElementById("start").addEventListener("click", displayList);
//document.getElementById("stop").addEventListener("click", stopList);
document.getElementById("valid").addEventListener("click", validateResp);