const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const deleteButton = document.querySelector("[data-delete]");
const resetButton = document.querySelector("[data-reset]");
const equalButton = document.querySelector("[data-equal]");
const previousValue = document.querySelector(".smaller_output");
const firstValue = document.querySelector(".main_output");

let first = firstValue.innerHTML;
let operands = "";

numberButtons.forEach((button) => {
  button.addEventListener("click", display);
});

operationButtons.forEach((operands) => {
  operands.addEventListener("click", operations);
});
resetButton.onclick = reset;
deleteButton.onclick = deleteBtn;
equalButton.onclick = equal;

function display() {
  if (this.innerHTML === "." && firstValue.innerHTML == "") return;
  if (this.innerHTML === "." && firstValue.innerHTML.includes(".")) return;
  if (this.innerHTML === "0" && firstValue.innerHTML == "0") return;
  firstValue.innerHTML += this.innerHTML;
}

function operations() {
  if (
    firstValue.innerHTML.trim() === "" &&
    previousValue.innerHTML.trim() === ""
  )
    return;
  if (previousValue.innerHTML !== "" && firstValue.innerHTML === "") {
    previousValue.innerHTML =
      previousValue.innerHTML.slice(0, -1) + this.innerHTML;
  }
  if (previousValue.innerHTML === "") {
    previousValue.innerHTML = firstValue.innerHTML + this.innerHTML;
    firstValue.innerHTML = "";
  }
  operands = this.innerHTML;
}

function deleteBtn() {
  firstValue.innerHTML = firstValue.innerHTML.slice(0, -1);
}

function equal() {
  compute(operands);
  firstValue.innerHTML = "";
}

function compute(operands) {
  let computation = 0;
  console.log(operands);
  switch (operands) {
    case "+":
      computation =
        parseFloat(previousValue.innerHTML) + parseFloat(firstValue.innerHTML);
      previousValue.innerHTML = String(computation) + operands;
      break;
    case "-":
      computation =
        parseFloat(previousValue.innerHTML) - parseFloat(firstValue.innerHTML);
      previousValue.innerHTML = String(computation) + operands;
      break;
    case "x":
      computation =
        parseFloat(previousValue.innerHTML) * parseFloat(firstValue.innerHTML);
      previousValue.innerHTML = String(computation) + operands;
      if (computation == 0) {
        previousValue.innerHTML = "0";
      }
      break;
    case "/":
      computation =
        parseFloat(previousValue.innerHTML) / parseFloat(firstValue.innerHTML);
      previousValue.innerHTML = String(computation) + operands;
      break;
    default:
      break;
  }
  if (isNaN(firstValue) || isNaN(previousValue)) return;
}

function reset() {
  firstValue.innerHTML = "";
  previousValue.innerHTML = "";
}
// Theme change
styleSelector.onclick = themes;

function themes() {
  const body = document.querySelector("body");
  const text = document.querySelector("h4");
  const styleSelector = document.querySelector("#styleSelector");
  const themeSelect = document.querySelector("#theme_select");
  const calc = document.querySelector(".calc");
  const topContainer = document.querySelector(".topContainer");
  const inputWindow = document.querySelector(".inputWindow");
  const numberContainer = document.querySelector(".numberContainer");
  const numbers = document.querySelectorAll("[data-number]");
  const operators = document.querySelectorAll("[data-operation]");
  const delBtn = document.querySelector("#del_btn");
  const resetBtn = document.querySelector("#reset");
  const equalBtn = document.querySelector("#equal");

  if (styleSelector.value == 1) {
    body.style.backgroundColor = "hsl(222, 26%, 31%)";
    text.style.color = "white";
    calc.style.color = "white";
    styleSelector.style.backgroundColor = "hsl(223, 31%, 20%)";
    themeSelect.style.color = "white";
    topContainer.style.backgroundColor = "hsl(222, 26%, 31%)";
    inputWindow.style.backgroundColor = "hsl(224, 36%, 15%)";
    inputWindow.style.color = "white";
    numberContainer.style.backgroundColor = "hsl(223, 31%, 20%)";
    delBtn.style.backgroundColor = "hsl(225, 21%, 49%)";
    delBtn.style.boxShadow = "5px 5px hsl(224, 28%, 35%)";
    resetBtn.style.backgroundColor = "hsl(225, 21%, 49%)";
    resetBtn.style.boxShadow = "5px 5px hsl(224, 28%, 35%)";
    equalBtn.style.backgroundColor = "hsl(6, 63%, 50%)";
    equalBtn.style.boxShadow = "5px 5px hsl(6, 70%, 34%)";

    numbers.forEach((keys) => {
      keys.style.backgroundColor = "hsl(30, 25%, 89%)";
      keys.style.boxShadow = "5px 5px hsl(28, 16%, 65%)";
      keys.style.color = "black";
    });
    operators.forEach((keys) => {
      keys.style.backgroundColor = "hsl(30, 25%, 89%)";
      keys.style.boxShadow = "5px 5px hsl(28, 16%, 65%)";
      keys.style.color = "black";
    });
  } else if (styleSelector.value == 2) {
    body.style.backgroundColor = "hsl(0, 0%, 90%)";
    text.style.color = "hsl(60, 10%, 19%)";
    calc.style.color = "hsl(60, 10%, 19%)";
    styleSelector.style.backgroundColor = "hsl(35, 11%, 61%)";
    themeSelect.style.color = "hsl(60, 10%, 19%)";
    topContainer.style.backgroundColor = "hsl(0, 0%, 90%)";
    inputWindow.style.backgroundColor = "hsl(0, 0%, 93%)";
    inputWindow.style.color = "hsl(60, 10%, 19%)";
    numberContainer.style.backgroundColor = "hsl(0, 5%, 81%)";
    delBtn.style.backgroundColor = "hsl(185, 42%, 37%)";
    delBtn.style.boxShadow = "5px 5px hsl(185, 58%, 25%)";
    resetBtn.style.backgroundColor = "hsl(185, 42%, 37%)";
    resetBtn.style.boxShadow = "5px 5px hsl(185, 58%, 25%)";
    equalBtn.style.backgroundColor = "hsl(25, 98%, 40%)";
    equalBtn.style.boxShadow = "5px 5px hsl(25, 99%, 27%)";

    numbers.forEach((keys) => {
      keys.style.backgroundColor = "hsl(45, 7%, 89%)";
      keys.style.boxShadow = "5px 5px hsl(35, 11%, 61%)";
      keys.style.color = "hsl(60, 10%, 19%)";
    });
    operators.forEach((keys) => {
      keys.style.backgroundColor = "hsl(45, 7%, 89%)";
      keys.style.boxShadow = "5px 5px hsl(35, 11%, 61%)";
      keys.style.color = "hsl(60, 10%, 19%)";
    });
  } else if (styleSelector.value == 3) {
    body.style.backgroundColor = "hsl(268, 75%, 9%)";
    text.style.color = "hsl(52, 100%, 62%)";
    calc.style.color = "hsl(52, 100%, 62%)";
    styleSelector.style.backgroundColor = "hsl(268, 71%, 12%)";
    themeSelect.style.color = "hsl(52, 100%, 62%)";
    topContainer.style.backgroundColor = "hsl(268, 75%, 9%)";
    inputWindow.style.backgroundColor = "hsl(268, 71%, 12%)";
    inputWindow.style.color = "hsl(52, 100%, 62%)";
    numberContainer.style.backgroundColor = "hsl(268, 71%, 12%)";
    delBtn.style.backgroundColor = "hsl(281, 89%, 26%)";
    delBtn.style.boxShadow = "5px 5px hsl(285, 91%, 52%)";
    resetBtn.style.backgroundColor = "hsl(281, 89%, 26%)";
    resetBtn.style.boxShadow = "5px 5px hsl(285, 91%, 52%)";
    equalBtn.style.backgroundColor = "hsl(176, 100%, 44%)";
    equalBtn.style.boxShadow = "5px 5px hsl(177, 92%, 70%)";

    numbers.forEach((keys) => {
      keys.style.backgroundColor = "hsl(268, 47%, 21%)";
      keys.style.boxShadow = "5px 5px hsl(290, 70%, 36%)";
      keys.style.color = " hsl(52, 100%, 62%)";
    });
    operators.forEach((keys) => {
      keys.style.backgroundColor = "hsl(268, 47%, 21%)";
      keys.style.boxShadow = "5px 5px hsl(290, 70%, 36%)";
      keys.style.color = " hsl(52, 100%, 62%)";
    });
  }
}

themes();
