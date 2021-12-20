let senha = document.getElementById('senha');
let senhaC = document.getElementById('senhaC');

function validarSenha() {
  if (senha.value != senhaC.value) {
    senhaC.setCustomValidity("Senhas diferentes!");
    senhaC.reportValidity();
    return false;
  } else {
    senhaC.setCustomValidity("");
    return true;
  }
}

// verificar também quando o campo for modificado, para que a mensagem suma quando as senhas forem iguais
senhaC.addEventListener('input', validarSenha);

var verif = 0

function mostrarSenha() {
    if (verif == 0) {
        verif = 1
        var icon = document.getElementById("iconEye")
        var label = document.getElementById("passwordLogin")
        icon.setAttribute("src", "eye-slash.svg")
        label.setAttribute("type","text")
    }
    else{
        verif = 0
        var icon = document.getElementById("iconEye")
        var label = document.getElementById("passwordLogin")
        icon.setAttribute("src", "eye.svg")
        label.setAttribute("type","password")
    }
}
