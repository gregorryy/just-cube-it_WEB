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
  document.parametre.lance.disabled = "disabled";
  document.parametre.pause.disabled = "";
  document.parametre.zero.disabled = "";
  start = true;
}

//Bouton stop ou Touche espace
function arret() {
  window.clearTimeout(reglage);
  document.parametre.lance.disabled = "";
  document.parametre.pause.disabled = "disabled";
  document.parametre.zero.disabled = "";
}

//Bouton poubelle ou Touche Suppr
function raz() {
  document.parametre.zero.disabled = "disabled";
  centi = 0;
  mili = 0;
  sec = 0;
  afficher = sec + "0." + centi + mili;
  document.getElementById("time").innerHTML = afficher;
}

document.addEventListener("keydown", (event) => {
  //Touche espace préssée
  if (event.code === "Space") {
    event.preventDefault();
    if (!start) {
      chrono();
      debut();
    } else {
      arret();
      start = !start;
    }
  }
  //Touche suppr préssée
  if (event.code === "Backspace") {
    event.preventDefault();
    arret();
    raz();
  }
});
