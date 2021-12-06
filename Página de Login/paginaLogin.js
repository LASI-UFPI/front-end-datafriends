var verif = 0

function mostrarSenha() {
    if (verif == 0) {
        verif = 1
        var icon = document.getElementById("iconEye")
        var label = document.getElementById("passwordLogin")
        icon.setAttribute("src", "closedEye.png")
        label.setAttribute("type","text")
    }
    else{
        verif = 0
        var icon = document.getElementById("iconEye")
        var label = document.getElementById("passwordLogin")
        icon.setAttribute("src", "openEye.png")
        label.setAttribute("type","password")
    }
}