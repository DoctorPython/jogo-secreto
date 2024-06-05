/*let titulo = document.querySelector('h1');
titulo.innerHTML = 'Inicio do Jogo';

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha um número de 1 á 10';*/


let listaNumeroSorteados = [];
let tentativas = 1;
let numeroSecreto = gerarNumeroAleatorio();



exibirMensagemInicial();

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Vamos iniciar o jogo');
    exibirTextoNaTela('p', 'Digite um número de 1 a 50');
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * 3 + 1);
    let quantidadeElementosLista = listaNumeroSorteados.length;
    if(quantidadeElementosLista == 3){
        listaNumeroSorteados = [];
    }
    if(listaNumeroSorteados.includes(numeroEscolhido)){ 
        return gerarNumeroAleatorio();
    }else{
        listaNumeroSorteados.push(numeroEscolhido);
        console.log(listaNumeroSorteados);
        return numeroEscolhido;
    }
}
function exibirTextoNaTela(tag, texto){

    let campo = document.querySelector(tag,texto);
    campo.innerHTML = texto;

}
function limparCampo(){

    chute = document.querySelector('input');
    chute.value = '';
    chute.select();
}
function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);//
    //exibirTextoNaTela('h1', 'Vamos iniciar o jogo');
    //exibirTextoNaTela('p', 'digite um número de 1 a 10');
    


}
function verificarBotao(){

let chute = document.querySelector('input').value  //valida se a entrada de dados do cliente é true or false
if (chute == numeroSecreto) {

    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    mensagemTentativa = `O número secrero é ${numeroSecreto}, Você acertou com ${tentativas} ${palavraTentativa}`;
    exibirTextoNaTela('p', mensagemTentativa);
    document.getElementById('reiniciar').removeAttribute('disabled'); //habilita o botão reiniciar
} else {
    if (chute > numeroSecreto) {
        exibirTextoNaTela('p','O chute é maior que o número secreto');
        
    } else {
        exibirTextoNaTela('p','O chute é menor que o número secreto');

    }
    tentativas++
    limparCampo();
}
   
   
   //console.log(numeroSecreto == chute);
   //alert(tentativas);
   //let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
   //alert(palavraTentativa); 
}

