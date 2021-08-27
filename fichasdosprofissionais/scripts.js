//Função para completar os campos de endereço a partir do CEP
const options = {
    method: "GET",
    mode: "cors",
    caches: "default"
}

const cep = document.getElementById("cep")
cep.addEventListener("blur", (e) => {
    let Cep = document.getElementById("cep").value;
    console.log(Cep)
    let search = cep.value.replace("-", "")
    fetch(`https://viacep.com.br/ws/${search}/json/`, options).then((response) => {
        response.json().then(data => {
            console.log(data)
            document.getElementById("logradouro").value = data.logradouro;
            document.getElementById("bairro").value = data.bairro;
            document.getElementById("localidade").value = data.localidade;
           

        })
    })
})

function enviar() {
    let logradouro = document.getElementById("logradouro").value;
    let bairro = document.getElementById("bairro").value;
    let localidade = document.getElementById("localidade").value;
    let json = {
        "logradouro": logradouro,
        "bairro": bairro,
        "localidade": localidade,
    }
    console.log(json)}