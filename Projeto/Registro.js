
let form = document.getElementById('formRegistro');
form.addEventListener('submit', (e) => {
  
    e.preventDefault(); 
    pegarDados();
    
    window.location.href = 'concluido.html';
});

function pegarDados(){ //função para pegar os dados do form

    let dadosForm= new FormData(form);
    let dadosEnvio= Object.fromEntries(dadosForm);

    console.log('Dados do Formulario: ');

    for(const [chave, valor] of Object.entries(dadosEnvio)){
        console.log(`${chave}: ${valor}`);
    }
}


