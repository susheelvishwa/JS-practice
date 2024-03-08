let hello = document.getElementById("button");

hello.addEventListener("click", handlebtn);


function handlebtn() {
    let Name = document.querySelector("#name").value;
    let Email = document.querySelector("#email").value;
    let word = document.querySelector("#pass").value;
    
    console.log(Name);
    console.log(Email);
    console.log(word);
    
    alert("Succsessfully login")
}
