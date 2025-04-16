alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = parseInt(Math.random() * 50 + 1);
console.log(numeroSecreto);
let chute;
console.log(chute);
let tentativas = 1;

while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 50');

    // se chute for igual ao número secreto
    if (chute == numeroSecreto) {
        break;
    }else if (chute > numeroSecreto){
        alert(`O numero secreto é menor que ${chute}`);
    }else {
        alert(`O numero secreto é maior que ${chute}`);
    }

    tentativas++

}

let quantasTentativas = tentativas > 1 ? "tentativas" : "tentativa"
    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${quantasTentativas}`);

