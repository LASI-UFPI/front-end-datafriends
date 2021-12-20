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