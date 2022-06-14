let userInp = document.querySelector("#userInputString");
const vocals = "aeiouAEIOU";
const consonants = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ";
let btnFuncions = document.querySelectorAll(".functions");
let textOutput = document.querySelector("#textOutput");
let numOfVocal = 0;
let numOfConsant = 0;
for (i = 0; i < btnFuncions.length; i++) {
  if (i == 0) {
    btnFuncions[i].addEventListener("click", () => {
      numOfVocal = 0;
      for (j = 0; j < vocals.length; j++) {
        for (k = 0; k <= userInp.value.length; k++) {
          if (vocals[j] == userInp.value[k]) {
            numOfVocal++;
          }
        }
      }
      textOutput.innerText = ` number of vowels is ${numOfVocal}`;
    });
  }
  if (i == 1) {
    btnFuncions[i].addEventListener("click", () => {
      numOfVocal = 0;
      numOfConsant = 0;
      for (k = 0; k < userInp.value.length; k++) {
        for (j = 0; j <= consonants.length; j++) {
          if (consonants[j] == userInp.value[k]) {
            numOfConsant++;
          }
        }
      }
      textOutput.innerText = `The number of consonants is ${numOfConsant}`;
    });
  }
  if (i == 2) {
    btnFuncions[i].addEventListener("click", () => {
      let upperCase = userInp.value.toUpperCase();
      textOutput.innerText = `The text had been set to upper case:${upperCase}`;
    });
  }
  if (i == 3) {
    btnFuncions[i].addEventListener("click", () => {
      let palindrom = userInp.value.split("").reverse().join("");
      if (palindrom == userInp.value) {
        textOutput.innerText = `Your text is a palindorm`;
      } else {
        textOutput.innerText = `Your text isn't palindorm`;
      }
    });
  }
  if (i == 4) {
    btnFuncions[i].addEventListener("click", () => {
      textOutput.innerHTML = `Reverse text:${userInp.value
        .split("")
        .reverse()
        .join("")}`;
    });
  }
}
