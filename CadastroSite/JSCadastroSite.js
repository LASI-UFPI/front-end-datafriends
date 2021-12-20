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

var verif1 = 0

function mostrarSenha1() {
    if (verif1 == 0) {
        verif1 = 1
        var icon = document.getElementById("iconEye")
        var label = document.getElementById("senha")
        icon.setAttribute("src", "eye-slash.svg")
        label.setAttribute("type","text")
    }
    else{
        verif1 = 0
        var icon = document.getElementById("iconEye")
        var label = document.getElementById("senha")
        icon.setAttribute("src", "eye.svg")
        label.setAttribute("type","password")
    }
}

var verif2 = 0

function mostrarSenha2() {
    if (verif2 == 0) {
        verif2 = 1
        var icon2 = document.getElementById("iconEye2")
        var label2 = document.getElementById("senhaC")
        icon2.setAttribute("src", "eye-slash.svg")
        label2.setAttribute("type","text")
    }
    else{
        verif2 = 0
        var icon2 = document.getElementById("iconEye2")
        var label2 = document.getElementById("senhaC")
        icon2.setAttribute("src", "eye.svg")
        label2.setAttribute("type","password")
    }
}
