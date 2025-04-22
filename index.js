import { prompt } from "./prompt.js";

let numberTry = 1;

const targetNumber = () => {
  const targetNumber = Math.floor(Math.random() * 101);
  return targetNumber;
};

const randomNumber = targetNumber();

function start() {
  console.log(`Welcome to the Number Guessing Game! 🎮

Rules:
1. The system will generate a random number between 0 and 100.
2. Your task is to guess this number.
3. Enter a number when prompted.
4. If your guess is too high or too low, you'll be notified, and you can guess again.
5. The game continues until you guess the correct number.

Let's get started! 🚀
`);
}

function guessNumber() {
  const numberUser = prompt("entrer un nombre entre 0 et 100 : ");

  if (numberUser < 0 || numberUser > 100) {
    console.error("Erreur ! Il faut un nombre entre 0 et 100. Recommencez !");
    return guessNumber();
  }

  if (numberUser > randomNumber) {
    console.log("📈 The entered number is **too big**.");
    numberTry++;
    return guessNumber();
  }

  if (numberUser < randomNumber) {
    console.log("📉 The entered number is **too small**.");
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
}

start();
guessNumber();
