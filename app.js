
let amigos = [];

function adicionarAmigo(){
    let inputAmigo = document.getElementById('amigo');
    let nomeAmigo = inputAmigo.value;
    
    //Verifica se o nome foi digitado
    if(!nomeAmigo){
        alert("Digite o nome do amigo!");

        return;
    }
    //Adiciona o nome no array 
    amigos.push(nomeAmigo);
    amigos.value = ""
    amigos.focus();
}

    //Renderiza lista na tela

    function atualizarLista(){
        let listaAmigos = document.getElementById("listaAmigos");
        listaAmigos.innerHTML = " ";

        for (let i=0; i < amigos.length; i++){
            
        }
    }