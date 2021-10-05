let Senha = document.getElementById("Senha")
let SenhaNov = document.getElementById("SenhaNov");

function validatePassword(){

  if(Senha.value != SenhaNov.value) {
    SenhaNov.setCustomValidity("Senhas diferentes!");
    SenhaNov.reportValidity();
    return false;
  } else {
    SenhaNov.setCustomValidity(' ');
    return true;
  }
}
