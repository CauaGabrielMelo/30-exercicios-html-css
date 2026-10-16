// botao de apoiar autor, ta na index.html
// preciso checar se ele existe antes, porque esse botao nao ta em toda pagina
const btnApoiar = document.getElementById("btnApoiar");

if (btnApoiar) {
    btnApoiar.addEventListener("click", function () {
        document.getElementById("mensagemApoio").innerText = "Valeu por apoiar o Ravi! Vamos avisar ele que voce curtiu o trabalho.";
    });
}

// botao de contato, ta na contato.html
const btnContato = document.getElementById("btnContato");

if (btnContato) {
    btnContato.addEventListener("click", function () {
        document.getElementById("mensagemContato").innerText = "Mensagem enviada! A equipe responde em ate 2 dias uteis.";
    });
}
