function showName() {
  let Name = document.querySelector("#name").value;
  document.getElementById("dName").innerHTML = Name;
}

function showGender() {
  // Show the selected gender in
  let Gen = document.querySelector("#gender").value;
  document.getElementById("dGender").innerHTML = Gen;
  // console.log(Gen);
}

function showEmail() {
  // Show the filled email inside h3
  let Emaill = document.querySelector("#email").value;
  document.getElementById("dEmail").innerHTML = Emaill;
  // console.log(Emaill);
}

function showMobile() {
  // Show the filled mobile inside h4
  let Mobi = document.querySelector("#mobile").value;
  document.getElementById("dMobile").innerHTML = Mobi;
  // console.log(Mobi);
}

function resetForm() {
  // Reset all the form elements to default values (blank
  document.querySelector("#name").value = " ";
  document.querySelector("#mobile").value = " ";
  document.querySelector("#gender").value = " ";
  document.querySelector("#email").value = " ";
}

function resetDisplay() {
  // Reset all the headings (h1 h2, h3, h4) to blank values
    document.querySelector("#dName").innerHTML = "Name";
    document.querySelector("#dGender").innerHTML = "Gender";
    document.querySelector("#dEmail").innerHTML = "Email";
    document.querySelector("#dMobile").innerHTML = "Mobile";
}
