//Nome, email e assunto
let nome = document.querySelector('#nome');
let erroNome = document.querySelector('#erroNome');

let email = document.querySelector('#email');
let erroEmail = document.querySelector('#erroEmail');

let assunto = document.querySelector('#assunto');
let erroAssunto = document.querySelector('#erroAssunto');

// variaveis auxiliares de validação
let nomeOk = false;
let emailOk = false;
let assuntoOk = false;

function validaNome() {
    if (nome.value.length < 3){
        erroNome.innerHTML = 'Nome Inválido'
    }
    else{
        erroNome.innerHTML = ''
        nomeOk= true
    }
}

function validaEmail() {
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        erroEmail.innerHTML = 'Email Inválido'
    }
    else{
        erroEmail.innerHTML = ''
        emailOk= true
    }
}
function validaAssunto() {
    if (assunto.value.length > 100){
        erroAssunto.innerHTML = 'Limite Excedido(100 caracteres)'
    }
    else{
        erroAssunto.innerHTML = ''
        assuntoOk= true
    }
}
// enviar o contato

function enviar(){
    if(nomeOk && emailOk && assuntoOk){
        alert('Requisição enviado com sucesso!')
    }
    else{
        alert('Preencha as informações corretamente')
    }
}

function mapaZoom(){
    mapa.style.width = '600px';
    mapa.style.height = '400px';
}
function mapaNormal(){
    mapa.style.width = '400px';
    mapa.style.height = '250px';
}
