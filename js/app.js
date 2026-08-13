let amigos = [];

function adicionar() {
    let nomes = document.getElementById("nome-amigo").value;
    if (amigos.includes(` ${nomes}`)) {
        alert("Nome já adicionado!");
        return;
    }
    if (nomes !== "") {
    amigos.push(` ${nomes}`);
    nomes = " ";
    } else {
        alert("Digite um nome antes de clicar em adicionar.");
    }
    let listaAmigos = document.getElementById("lista-amigos");
    listaAmigos.textContent = amigos
    document.getElementById("nome-amigo").value = "";

}

function sortear() {
    embaralha(amigos);
    let listaSorteio = document.getElementById("lista-sorteio");

    if (amigos.length <= 3) {
        alert("Adicione 4 nomes ou mais para sortear.")
    } else {
    for (let i = 0; i < amigos.length; i++) {

        if (i == amigos.length - 1) {
            listaSorteio.innerHTML = listaSorteio.innerHTML + amigos[i] + " -->" + amigos[0] + "<br>";
        } else {
             listaSorteio.innerHTML = listaSorteio.innerHTML + amigos[i] + " -->" + amigos[i + 1] + "<br>";
        }

       }
    }
        
}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    amigos = [];
    document.getElementById("nome-amigo").value = "";
    document.getElementById("lista-amigos").textContent = "";
    document.getElementById("lista-sorteio").textContent = "";
}