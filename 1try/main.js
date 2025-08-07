

let Clicado = document.getElementById("converter").addEventListener('click', (e)=> {
    criarConversao();

    limparInput();



})




function criarConversao(){

    let valorReal = document.getElementById("real").value;

    if(valorReal === '' || isNaN(valorReal)){
        alert('Digita um valor valido seu fdp');
        return;
    }

    let p = document.createElement("p");
    let resuldado=document.getElementById('resultados');

    p.textContent= (valorReal*5.51).toFixed(2);

    resuldado.innerHTML='R$ = ';



    resuldado.appendChild(p);



}

function limparInput(){

    let input = document.getElementById("real");

    input.value = '';


}


