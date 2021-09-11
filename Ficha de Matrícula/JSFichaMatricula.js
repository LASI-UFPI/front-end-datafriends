window.onload = function(){

    var htmlDados = `
        <div class="row">
            <!-- Nome escola -->
            <div class="col-md-4">
                <label for="nomeEscola" class="form-label">Nome da Escola</label>
                <input type="text" class="form-control" id="nomeEscola" placeholder="Digite o nome da escola">
            </div>
            <!-- Endereço Escola -->
            <div class="col-md-8">
                <label for="enderEscola" class="form-label">Endereço</label>
                <input type="text" class="form-control" id="enderEscola" placeholder="Digite o endereço da escola">
            </div>
            <!-- Telefone Escola -->
            <div class="col-md-2 mt-3">
                <label for="telEscola" class="form-label">Telefone da Escola</label>
                <input type="text" class="form-control" id="telEscola" placeholder="">
            </div>
            <!-- Diretor escola -->
            <div class="col-md-3 mt-3">
                <label for="dirEscola" class="form-label">Diretor(a)</label>
                <input type="text" class="form-control" id="dirEscola" placeholder="">
            </div>
            <!-- Tempo escola -->
            <div class="col-md-3 mt-3">
                <label for="tempoEscola" class="form-label">Há quanto tempo estuda na escola?</label>
                <input type="text" class="form-control" id="tempoEscola">
            </div>
            <!-- Acompanhante escola -->
            <fieldset class="row mb-3 pe-1">
                <div class="col-md-3 mt-3">
                    <legend class="col-form-label col-12 pt-0">Possui acompanhante na escola?</legend>
                    <div class="col-12">
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="acompanhante" id="simAcomapanhante" value="sim">
                            <label class="form-check-label" for="simAcomapanhante">Sim</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="acompanhante" id="naoAcompanhante" value="nao">
                            <label class="form-check-label" for="naoAcompanhante">Não</label>
                        </div>
                    </div>
                </div>
            </fieldset>
        </div>
    `;

        dadosEscola.innerHTML = htmlDados
}

function escola(){

    box = document.getElementById("nFreqEscola")
    dadosEscola = document.getElementById("dadosEscola")
    motivoEscola = document.getElementById("motivoEscola")
    if(box.checked){

        // SEGUNDA OPÇÃO
        // dadosEscola = document.getElementById("dadosEscola").style.display="none"
        // motivoEscola = document.getElementById("motivoEscola").style.display="block"

        var htmlDados = ""
        dadosEscola.innerHTML = htmlDados

        var htmlMotivo = `
            <div class="col-md-5">
                <label for="dirEscola" class="form-label">Por que não frequenta ou frequentou a escola?</label>
                <textarea type="text" class="form-control" id="dirEscola" placeholder=""></textarea>
            </div>
        `;

        motivoEscola.innerHTML = htmlMotivo

    }
    else{

        // SEGUNDA OPÇÃO
        // dadosEscola = document.getElementById("dadosEscola").style.display="block"
        // motivoEscola = document.getElementById("motivoEscola").style.display="none"

        var htmlDados = `
            <div class="row">
                <!-- Nome escola -->
                <div class="col-md-4">
                    <label for="nomeEscola" class="form-label">Nome da Escola</label>
                    <input type="text" class="form-control" id="nomeEscola" placeholder="Digite o nome da escola">
                </div>
                <!-- Endereço Escola -->
                <div class="col-md-8">
                    <label for="enderEscola" class="form-label">Endereço</label>
                    <input type="text" class="form-control" id="enderEscola" placeholder="Digite o endereço da escola">
                </div>
                <!-- Telefone Escola -->
                <div class="col-md-2 mt-3">
                    <label for="telEscola" class="form-label">Telefone da Escola</label>
                    <input type="text" class="form-control" id="telEscola" placeholder="">
                </div>
                <!-- Diretor escola -->
                <div class="col-md-3 mt-3">
                    <label for="dirEscola" class="form-label">Diretor(a)</label>
                    <input type="text" class="form-control" id="dirEscola" placeholder="">
                </div>
                <!-- Tempo escola -->
                <div class="col-md-3 mt-3">
                    <label for="tempoEscola" class="form-label">Há quanto tempo estuda na escola?</label>
                    <input type="text" class="form-control" id="tempoEscola">
                </div>
                
                <!-- Acompanhante escola -->
                <fieldset class="row mb-3 pe-1">
                    <div class="col-md-3 mt-3">
                        <legend class="col-form-label col-12 pt-0">Possui acompanhante na escola?</legend>
                        <div class="col-12">
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="acompanhante" id="simAcomapanhante" value="sim">
                                <label class="form-check-label" for="simAcomapanhante">Sim</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="acompanhante" id="naoAcompanhante" value="nao">
                                <label class="form-check-label" for="naoAcompanhante">Não</label>
                            </div>
                        </div>
                    </div>
                </fieldset>
            </div>
        `;

        dadosEscola.innerHTML = htmlDados

        var htmlMotivo = ""
        motivoEscola.innerHTML = htmlMotivo
    }

}