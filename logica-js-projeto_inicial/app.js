alert('Bem vindo ao jogo do número secreto!');
let = numeroMaximo = 1000
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1); //parseInt serve para excluir os numeros após o ponto, Mathrandom gera número aleatorio
let chute;
let tentativas = 1;

// enquanto
while (chute != numeroSecreto){
    chute = prompt(`Digite um número de 1 a ${numeroMaximo}:`);
//Se o chute for igual ao número secreto
    if (chute == numeroSecreto) {
        break;
    }else {
        if (chute < numeroSecreto) {
            alert(`O número secreto é maior que ${chute}`);
        } else {
            alert(`O número secreto é menor que ${chute}`);
        }
        tentativas++;
    }
}

//Operador Ternário, serve como um if/else para exibir a palavra tentativa ou tentativas
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';

alert(`Você acertou! O número secreto é ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);


