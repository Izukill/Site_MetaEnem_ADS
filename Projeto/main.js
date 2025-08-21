
let duvidaFlags = {};

//Botoes iniciais
let saibaMais = document.getElementById('botaoSaibaMais');
saibaMais.addEventListener('click', (e) => {

    e.preventDefault();



    window.location.href = '#sobreMetaEnem';
});

let Homeinscrever = document.getElementById('botaoInscrever');
Homeinscrever.addEventListener('click', (e) => {

    e.preventDefault();



    window.location.href = 'registro.html';
});



//Area das Duvidas


function botoesDuvidas(divId, conteudoTexto){
    const duvidaDiv= document.getElementById(divId);
    const seta= duvidaDiv.querySelector('.seta');
    const botao= duvidaDiv.querySelector('.duvidaButton');

    if(duvidaFlags[divId] === undefined){ //caso esteja vazio
        duvidaFlags[divId] = false;
    }

    if(duvidaFlags[divId] === false){ //caso esteja desativado
        const texto = document.createElement('p');
        texto.textContent = conteudoTexto;
        duvidaDiv.appendChild(texto);
        botao.style.marginBottom = '30px';
        seta.classList.add('rotacionada');
        duvidaFlags[divId] = true;
    }else{ //caso ativado
        duvidaDiv.removeChild(duvidaDiv.querySelector('p'));
        botao.style.marginBottom = '0px';
        seta.classList.remove('rotacionada');
        duvidaFlags[divId] = false;
    }


}



//Criação dos botões e textos que aparecem ao click

document.getElementById('buttonGratuito').addEventListener('click', (e) => {
    botoesDuvidas('gratuitoDiv', 'Sim, o projeto MetaEnem tem como objetivo democratizar o acesso à educação de qualidade, com acesso a videoaulas, materiais de apoio e simulados sem pagar absolutamente nada.');
});

document.getElementById('buttonDuracao').addEventListener('click', (e) => {
    botoesDuvidas('duracaoDiv', 'O nosso curso é um preparatório completo e contínuo, o acesso à plataforma e a todo o conteúdo, que é atualizado regularmente, fica disponível até a data de realização da prova do enem.');
});

document.getElementById('buttonContato').addEventListener('click', (e) => {
    botoesDuvidas('contatoDiv', 'Se comunique conosco através de nosso email: MetaEnem@gmail.com, ou WhatsApp: (83) 9 9762-1356, estaremos aguardando seu contato.');
});

document.getElementById('buttonAula').addEventListener('click', (e) => {
    botoesDuvidas('aulaDiv', 'Todas as aulas, materiais de apoio, listas de exercícios e simulados serão disponibilizados em nossa plataforma exclusiva, acessível diretamente pelo nosso site, após realizar sua inscrição, você receberá um login e senha para ter acesso a todo o conteúdo a qualquer momento, de onde estiver, seja pelo computador, tablet ou celular.');
});

