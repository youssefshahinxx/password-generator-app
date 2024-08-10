
let generatorElF = document.getElementById("generator-elF")
let generatorElS = document.getElementById("generator-elS")
let inputNumEl = document.getElementById("inputNum")
let buttonEl = document.getElementById("button-el")
let buttonEl2 = document.getElementById("button-el2")
let keys =[
    'a', '%', 'K', 'H', 'j', 'm', '3', 'Q', '@', 'z', '!', 'D', '9', '(', 'x', 'M', '&', 'L', 'o', '7', '^', 'P', 'y', '$', 'A', 't', '4', '*', 'B', 'c', '1', 'W', '+', 'r', '2', 'V', 'e', 'U', '8', '!', 'Z', 'n', '5', 'X', 's', '0', 'J', 'g', '3', 'I', 'h', 'O', '9', '@', 'E', 'v', '6', '(', 'F', 'l', '2', 'Y', 'd', '7', 'C', 'k', 'T', '5', '&', 'N', 'p', '4', ')', 'R', 'b', '8'
]


let randompass
let passwordLength = ""


function generatePassS() {
  if (generatorElS.textContent === "" ) {
      for (i = 0; i < passwordLength; i++) {
          randompass = Math.floor(Math.random() * keys.length)
          generatorElS.textContent += keys[randompass]
        } for (i = 0; i < passwordLength; i++) {
          randompass = Math.floor(Math.random() * keys.length)
          generatorElF.textContent += keys[randompass]
        }
      } if (inputNumEl.value === "") {
          passwordLength = 15
        } else {
          passwordLength = inputNumEl.value
        }
      }

function resetPassS() {
  generatorElF.textContent = ""
  generatorElS.textContent = ""
}

// inputNumEl.addEventListener("click", function() {
//   passwordLength.push(inputNumEl.value)
//   inputNumEl.value = ""
// })