const result = document.getElementById("result");
const result2 = document.getElementById("result2");
const clearBtn = document.getElementById("AC");
const backspaceBtn = document.getElementById("backspace");
const equalBtn = document.getElementById("equal");
const number = document.getElementsByClassName("number");
const operator = document.getElementsByClassName("operator");

function caller(e) {
  const targetItem = e.target.innerText;
  result.innerHTML += targetItem;
}

for (const button of number) {
  button.addEventListener("click", caller);
}

for (const button of operator) {
  button.addEventListener("click", caller);
}

clearBtn.addEventListener("click", () => {
  result.innerHTML = "";
  result2.innerHTML = "";
});

equalBtn.addEventListener("click", () => {
  result2.innerHTML = eval(result.innerHTML);
});

backspaceBtn.addEventListener("click", () => {
  result.innerText = result.innerText.slice(0, -1);
});
