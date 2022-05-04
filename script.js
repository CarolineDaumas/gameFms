let tab = ["oiseau", "avocat", "kiwi", "fraise", "poire", "chocolat", "orange", "Italie", "koala", "bateau",
    "Groenland", "stylo", "pain", "grenadine", "chien", "imprimante", "chat", "conceptuellement", "chocolatine", "pain au chocolat"]

let newTab = []
let list = document.getElementById("list")
let listLi;



// tab.forEach(element => {
//     console.log(element)
// });

// gerér les doublons ?
function randomArray(tab) {
    for (let i = 0; i < 10; i++) {
        let rep = Math.ceil(Math.random() * tab.length - 1)
        //console.log(tab.length);
        newTab[i] = rep
    }
}

let nIntervId;

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
    newTab.forEach(element => {
       
        let li = document.createElement("li")
        li.innerHTML = tab[element]
        list.appendChild(li)
    });
    

}

function stopList() {
    clearInterval(nIntervId);
    // release our intervalID from the variable
    listLi = document.querySelectorAll("li")

    listLi.forEach(e => e.remove())
    nIntervId = null;
}

document.getElementById("start").addEventListener("click", displayList);
document.getElementById("stop").addEventListener("click", stopList);



