let listNum = [];
let numMax = 100;
let numSecret = gerarNum();
let tentativas = 1;

//teste 01

const inputField = document.getElementById("inputNum"); 

inputField.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    verificar();
    limpar();
  }
});

function exTxt(tag, txt) {
    let campo = document.querySelector(tag);
    campo.innerHTML = txt;

}

function mensInicial() {
    exTxt('h1', 'Jogo do Número Secreto!');
    exTxt('p', `Escolha um número entre 1 e ${numMax}`);
}

mensInicial();

function verificar() {
    let chute = document.querySelector('input').value

    console.log(numSecret);
    console.log(numSecret == chute);

    if (chute == numSecret) {
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';

        exTxt('h1', 'Você acertou!!!');
        exTxt('p', `Você acertou com ${tentativas} ${palavraTentativa}`); 

        document.getElementById("reiniciar").disabled = false;

    } else {

        if (chute > numSecret) {
            exTxt('p', `O número secreto é menor que ${chute}`);
        } else {
            exTxt('p', `O número secreto é maior que ${chute}`);
        }
        
        tentativas++;

        limpar()
    }

    console.log(tentativas);
}

function gerarNum() {
    let numAleatorio = parseInt(Math.random() * numMax + 1);
    let quantList = listNum.length;

    if (quantList == numMax) {
        listNum = [];
    }

    if (listNum.includes(numAleatorio)) {
        return gerarNum();
    } else {
        listNum.push(numAleatorio);
        console.log(listNum);
        return numAleatorio;
    }

}

function limpar() {
    let chute = document.querySelector('input');
    chute.value = "";
}

function reiniciar() {
    numSecret = gerarNum();
    limpar();
    tentativas = 1;
    mensInicial();
    document.getElementById("reiniciar").disabled = true;
    
    //location.reload();{} 
}

