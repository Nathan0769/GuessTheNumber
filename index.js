import { prompt } from "./prompt.js";

let numberTry = 1;

function start() {
  const min = 0;
  const max = 101;
  numberTry = 1;

  const targetNumber = (min, max) => {
    const targetNumber = Math.floor(Math.random() * (max - min) + min);
    return targetNumber;
  };

  const randomNumber = targetNumber(min, max);

  console.log(`
    Bienvenue dans le jeu Devine le Nombre ! 🎮

Règles :
1. Le système va générer un nombre aléatoire entre 0 et 100.
2. Votre objectif est de deviner ce nombre.
3. Entrez un nombre quand on vous le demande.
4. Si votre nombre est trop grand ou trop petit, vous serez notifié et pourrez réessayer.
5. Le jeu continue jusqu'à ce que vous trouviez le bon nombre.

C'est parti ! 🚀
`);

  function newGame() {
    const userChoice = prompt("Voulez-vous rejouer ? (O/N) : ");
    if (userChoice.toUpperCase() === "N") {
      console.log("Au revoir ! 👋");
      return false;
    } else if (
      userChoice.toUpperCase() === "O" ||
      userChoice.toUpperCase() === "Y"
    ) {
      return true;
    } else {
      console.log("Entrez O ou N pour relancer ou arrêter la partie.");
      return newGame();
    }
  }

  function guessNumber() {
    const numberUser = Number(prompt("Entrez un nombre entre 0 et 100 : "));

    if (numberUser < 0 || numberUser > 100 || isNaN(numberUser)) {
      console.error(`
      Erreur ! Il faut un nombre entre 0 et 100. Recommencez !
      `);
      return guessNumber();
    }

    if (numberUser > randomNumber) {
      console.log(`
      📈 Le nombre entré est ** trop grand **.
      `);
      numberTry++;
      return guessNumber();
    }

    if (numberUser < randomNumber) {
      console.log(`
      📉 Le nombre entré est ** trop petit **.
      `);
      numberTry++;
      return guessNumber();
    }

    console.log(
      "Bravo ! Le nombre aléatoire était bien " +
        randomNumber +
        " ✨. Vous avez réussi en : " +
        numberTry +
        " tentatives"
    );

    const choiseUser = newGame();

    if (choiseUser !== false) {
      return guessNumber();
    } else {
      return false;
    }
  }

  guessNumber();
}

// On lance le jeu
start();
