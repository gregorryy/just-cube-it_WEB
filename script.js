let centi = 0; //Variable des centièmes
let mili = 0; //Variable des milisecondes
let sec = 0; //Variable des secondes
let sec_; //Variable pour formater les secondes avec deux chiffres
let afficher;
let compteur;
let start = false; //Variable pour savoir si le chrono est allumé ou non

document.getElementById("time").innerHTML = "0" + sec + "." + "0" + mili; //Affichage au chargement de la page

//Fonction principale : le chronomètre
function chrono() {
  setInterval(function () {
    mili++;
    if (mili > 9) {
      mili = 0;
    }
  }, 1);

  centi++;
  centi * 10;
  if (centi > 9) {
    centi = 0;
    sec++;
  }

  if (sec < 10) {
    sec_ = "0" + sec;
  } else {
    sec_ = sec;
  }

  afficher = sec_ + "." + centi + mili;
  document.getElementById("time").innerHTML = afficher;

  reglage = window.setTimeout("chrono();", 100);
}

//Bouton play ou Touche espace
function debut() {
  start = true;
}

//Bouton stop ou Touche espace
function arret() {
  window.clearTimeout(reglage);
}

//Bouton poubelle ou Touche Suppr
function raz() {
  centi = 0;
  mili = 0;
  sec = 0;
  afficher = sec + "0." + centi + mili;
  document.getElementById("time").innerHTML = afficher;
  start = false;
}

document.addEventListener("keydown", (event) => {
  //Touche espace préssée
  if (event.code === "Space") {
    event.preventDefault();
    if (!start && document.getElementById("time").innerHTML === "00.00") {
      chrono();
      debut();
      buttonNone();
    } else {
      arret();
      buttonPause();
      start = !start;
    }
  }
  //Touche suppr préssée
  if (event.code === "Backspace") {
    arret();
    raz();
    buttonYes();
    generateScramble();
    start = false;
  }
});

function buttonNone() {
  document.getElementById("pause").classList = "pause";
  document.getElementById("zero").classList = "zero";
  document.getElementById("lance").classList = "none";
}

function buttonYes() {
  document.getElementById("pause").classList = "none";
  document.getElementById("zero").classList = "none";
  document.getElementById("lance").classList = "lance";
}

function buttonPause() {
  document.getElementById("pause").classList = "none";
  document.getElementById("zero").classList = "zero";
}

//SCRAMBLE GENERATOR
generateScramble();

function generateScramble() {
  // Possible Letters
  var array = new Array(" U", " D", " R", " L", " F", " B");

  // Possible switches
  var switches = ["", "'", "2"];

  var array2 = new Array(); // The Scramble.

  var last = ""; // Last used letter

  var random = 0;

  for (var i = 0; i < 20; i++) {
    // the following loop runs until the last one
    // letter is another of the new one
    do {
      random = Math.floor(Math.random() * array.length);
    } while (last == array[random]);

    // assigns the new one as the last one
    last = array[random];

    // the scramble item is the letter
    // with (or without) a switch
    var scrambleItem =
      array[random] + switches[parseInt(Math.random() * switches.length)];

    array2.push(scrambleItem); // Get letters in random order in the array.
  }

  var scramble = "";

  // Appends all scramble items to scramble variable
  for (i = 0; i < 20; i++) {
    scramble += array2[i];
  }

  document.getElementById("scramble").innerHTML = scramble; // Display the scramble
}

function showTimer() {
  document.getElementById("timer").style.display = "block";
  document.getElementById("stats").style.display = "none";
  document.getElementById("settings").style.display = "none";

  document.getElementById("navbar-timer").classList = "navbar-active";
  document.getElementById("navbar-settings").classList = "navbar-settings";
  document.getElementById("navbar-stats").classList = "navbar-stats";
}

function showStats() {
  document.getElementById("stats").style.display = "block";
  document.getElementById("timer").style.display = "none";
  document.getElementById("settings").style.display = "none";

  document.getElementById("navbar-stats").classList = "navbar-active";
  document.getElementById("navbar-settings").classList = "navbar-settings";
  document.getElementById("navbar-timer").classList = "navbar-timer";
}

function showSettings() {
  document.getElementById("timer").style.display = "none";
  document.getElementById("stats").style.display = "none";
  document.getElementById("settings").style.display = "block";

  document.getElementById("navbar-settings").classList = "navbar-active";
  document.getElementById("navbar-timer").classList = "navbar-timer";
  document.getElementById("navbar-stats").classList = "navbar-stats";
}
