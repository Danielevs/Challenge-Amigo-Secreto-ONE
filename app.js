let amigos = [];

function adicionarAmigo() {
    let inputAmigo = document.getElementById('amigo');
    let nomeAmigo = inputAmigo.value.trim();

    // Verifica se o nome foi digitado
    if (!nomeAmigo) {
        alert("Digite o nome do amigo!");
        return;
    }

    // Adiciona o nome ao array
    amigos.push(nomeAmigo);
    inputAmigo.value = ""; // Limpa o campo de entrada
    inputAmigo.focus(); // Define o foco no campo de entrada

    // Atualiza a lista na tela
    atualizarLista();
}

function atualizarLista() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; // Limpa a lista anterior

    // Adiciona os nomes do array na lista
    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement("li");
        item.textContent = amigos[i];
        listaAmigos.appendChild(item); // Adiciona o item à lista
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("A lista de amigos está vazia! Adicione nomes antes de sortear.");
        return;
    }
    // Sorteia um nome aleatoriamente
    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceSorteado];

    // Exibe o resultado na tela
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>${amigoSorteado}</li>`;
}
