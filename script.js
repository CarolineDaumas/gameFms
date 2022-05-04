let tab = [
  "oiseau",
  "avocat",
  "kiwi",
  "fraise",
  "poire",
  "chocolat",
  "orange",
  "Italie",
  "koala",
  "bateau",
  "Groenland",
  "stylo",
  "pain",
  "grenadine",
  "chien",
  "imprimante",
  "chat",
  "conceptuellement",
  "chocolatine",
  "pain au chocolat",
  "téléphone",
  "asticot",
  "pikachu",
  "cible",
  "archer",
  "bougie",
  "feuille",
  "arbre",
  "nuage",
  "lumière",
  "gens",
  "rue",
  "voiture",
  "piéton",
  "route",
  "lampadaire",
  "piquet",
  "architecture",
  "panneau",
  "éclipse",
  "juste",
  "git",
  "soupe",
  "choux",
  "farine",
  "omelette",
  "écriture",
  "abécédaire",
  "organigramme",
  "artichaut",
  "épinard",
  "fermière",
  "beurre",
  "laitage",
  "cabriole",
  "liste",
];

let newTab = [];
let nbRep = 0;
let listLi;
let nIntervId;
let li;

let list = document.getElementById("list");
let btnValid = document.getElementById("valid");
let btnStart = document.getElementById("start");
let btnReStart = document.getElementById("reStart");
let formul = document.getElementById("formu");
let validList = document.getElementById("validList");
let inputs = document.querySelectorAll("input");
let congrats = document.createElement("p");

// TODO gerér les doublons ?
function randomArray(tab) {
  for (let i = 0; i < 10; i++) {
    let rep = Math.ceil(Math.random() * tab.length - 1);
    //console.log(tab.length);
    if (newTab.indexOf(rep) == -1) {
      newTab[i] = rep;
    } else {
      Math.ceil(Math.random() * tab.length - 1);
    }
  }
}

function createLi(list) {
  newTab.forEach((element) => {
    li = document.createElement("li");
    li.innerHTML = tab[element];
    list.appendChild(li);
  });
}

function displayList() {
  // check if already an interval has been set up
  flashText();

  if (!nIntervId || nIntervId == null) {
    //console.log("start");
    nIntervId = setInterval(stopList, 5000);
    btnStart.style.display = "none";
  }
}

function flashText() {
  randomArray(tab);
  createLi(list);
}

function stopList() {
  formul.style.display = "flex";
  btnValid.style.display = "block";
  btnStart.style.display = "none";

  // release our intervalID from the variable
  clearInterval(nIntervId);
  nIntervId = null;

  listLi = document.querySelectorAll("li");
  listLi.forEach((e) => e.remove());
}

function validateResp() {
  createLi(validList);

  inputs.forEach((el) => {
    for (let i = 0; i < newTab.length; i++) {
      if (tab[newTab[i]] == el.value) {
        nbRep++;
        document.getElementById(el.id).style.border = "3px solid green";
        document.getElementsByTagName("li")[i].style.color = "green";
      }
    }
  });

  if (nbRep != 0) {
    congrats.innerHTML = "Vous avez " + nbRep + " bonnes réponses.";
    document.getElementById("responses").appendChild(congrats);
    nbRep = 0;
  }

  btnValid.style.display = "none";
  btnReStart.style.display = "block";
}

function reStartGame() {
  formul.reset();
  formul.style.display = "none";
  btnReStart.style.display = "none";
  congrats.innerHTML = "";

  inputs.forEach((el) => {
    document.getElementById(el.id).style.border = "1px solid gray";
  });

  listLi = document.querySelectorAll("li");
  listLi.forEach((e) => e.remove());

  displayList();
}

btnStart.addEventListener("click", displayList);
btnValid.addEventListener("click", validateResp);
btnReStart.addEventListener("click", reStartGame);
//document.getElementById("stop").addEventListener("click", stopList);
