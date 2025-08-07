


let saibaMais= document.getElementById('botaoSaibaMais');
saibaMais.addEventListener('click', (e) =>{
    e.preventDefault();


    window.location.href= '#sobreMetaEnem';

});


let Homeinscrever= document.getElementById('botaoInscrever');
Homeinscrever.addEventListener('click', (e) =>{
    e.preventDefault();

    window.location.href= 'registro.html';
});


let Registroinscrever= document.getElementById('finalRegistro');
Registroinscrever.addEventListener('click', (e) =>{
    e.preventDefault();

    window.location.href= 'concluido.html';
});

