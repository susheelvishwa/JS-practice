let Input1 = document.querySelector("#input1");
let Input2 = document.querySelector("#input2");
let btn1 = document.querySelector("#add");
let btn2 = document.querySelector("#subtract");
let btn3 = document.querySelector("#multiplication");
let btn4 = document.querySelector("#division"); 

btn1.addEventListener("click", handleadd);
btn2.addEventListener("click", handlesubtraction);
btn3.addEventListener("click", handlemultiplication)
btn4.addEventListener("click", handledivision);


function handleadd() {
  add = +Input1.value + +Input2.value;
  alert(add);
}
function handlesubtraction() {
  sub = +Input1.value - +Input2.value;
  alert(sub);
}
function handlemultiplication() {
  multi = +Input1.value * +Input2.value;
  alert(multi);
}
function handledivision() {
  divide = +Input1.value / +Input2.value;
  alert(divide);
}

