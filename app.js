const inputCharactersDOM = document.getElementById("numberOfCharacters");
const symbolsInputDOM = document.getElementById("symbolsInput");
const numbersInputDOM = document.getElementById("numbersInput");
const letterInputDOM = document.getElementById("letterInput");
const resultDOM = document.getElementById("inputResult");

let characters = {
  lowercaseLetters: "a b c d e f g h i j k l m n o p q r s t u v w x y z",
  capitalLetter: "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z",
  symbols: "! @ # $ % ^ & * ( ) _ - + = { [ } ] ; : < , > . ? /",
  numbers: "0 1 2 3 4 5 6 7 8 9",
};

const incrementCharacters = () => {
  inputCharactersDOM.value++;
};

const decrementCharacters = () => {
  if (inputCharactersDOM.value == 0) return;

  inputCharactersDOM.value--;
};

function generarPassword() {
  let preferences = {
    caracteres: parseInt(inputCharactersDOM.value),
    symbols: symbolsInputDOM.checked,
    numbers: numbersInputDOM.checked,
    capitalLetter: letterInputDOM.checked,
    lowercaseLetters: true,
  };

  let caracteresFinales = "";
  let password = "";

  for (property in characters) {
    if (preferences[property]) {
      caracteresFinales += characters[property] + " ";
    }
  }

  caracteresFinales = caracteresFinales.split(" ");

  for (let i = 0; i < preferences.caracteres; i++) {
    password +=
      caracteresFinales[Math.floor(Math.random() * caracteresFinales.length)];
  }

  resultDOM.value = password;
}

const copiarPassword = () => {
  document.execCommand("selectAll");
  document.execCommand("copy");
};
