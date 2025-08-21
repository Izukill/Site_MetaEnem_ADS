
confetti({ //efeito visual ao iniciar
    particleCount: 150,
    spread: 120,
    startVelocity: 40,
    origin:{
        y: 0.6
    }
});


class Comentario{ //classe comentário com a função de criar o objeto comentário

    constructor(texto, likes=0){
        this.texto=texto;
        this.likes=likes;
    }

    criarElemento(index) {
        let li = document.createElement("li");

        let pTexto = document.createElement("p");
        pTexto.textContent = this.texto;

        let divBotoes = document.createElement("div");
        divBotoes.className = "botoes-comentario";


        let botaoLike = document.createElement("button");
        botaoLike.textContent = `👍 ${this.likes}`;
        botaoLike.addEventListener("click", (e) => {
            this.likes++;
            atualizarLocalStorage(index, this);
            recarregarComentarios();
        });

        let botaoExcluir = document.createElement("button");
        botaoExcluir.textContent = "Excluir";
        botaoExcluir.addEventListener("click", (e) => {
            excluirComentario(index);
        });

        divBotoes.appendChild(botaoLike);
        divBotoes.appendChild(botaoExcluir);

        li.appendChild(pTexto);
        li.appendChild(divBotoes);

        return li;
    }






}


let botaoEnviar = document.getElementById('enviarComentario');
botaoEnviar.addEventListener('click', function(e) {
    e.preventDefault();
    adicionarComentario();
});


function adicionarComentario() {
    let comentarioInput = document.getElementById("comentario");
    let texto = comentarioInput.value;

    if(texto){
        salvarLocalStorege(texto);
        recarregarComentarios();
        comentarioInput.value = "";
    }else{
        alert("Digite algo antes de enviar :/");
    }
};


//Funções para manipular os comentários


function salvarLocalStorege(texto){
    let comentarios = JSON.parse(localStorage.getItem("comentarios")) || [];
    comentarios.push({ texto: texto, likes: 0 });
    localStorage.setItem("comentarios", JSON.stringify(comentarios));
}

function atualizarLocalStorage(index, comentarioAtualizado) {
    let comentarios = JSON.parse(localStorage.getItem("comentarios")) || [];
    comentarios[index] = comentarioAtualizado;
    localStorage.setItem("comentarios", JSON.stringify(comentarios));
}

function excluirComentario(index) {
    let comentarios = JSON.parse(localStorage.getItem("comentarios")) || [];
    comentarios.splice(index, 1);
    localStorage.setItem("comentarios", JSON.stringify(comentarios));
    recarregarComentarios();
}


function recarregarComentarios() {
    document.getElementById("listaComents").innerHTML = "";
    let comentarios = JSON.parse(localStorage.getItem("comentarios")) || [];
    comentarios.forEach((comentario, index) => {
        let c = new Comentario(comentario.texto, comentario.likes);
        document.getElementById("listaComents").appendChild(c.criarElemento(index));
    });
}


window.addEventListener("load", recarregarComentarios);

