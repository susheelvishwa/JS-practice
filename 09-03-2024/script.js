let task = document.querySelector("#submithandle");

task.addEventListener("click", function (event) {
  handlesubmit(event);
});

function handlesubmit(event) {
  event.preventDefault();
  console.log(event.target).value;
}
