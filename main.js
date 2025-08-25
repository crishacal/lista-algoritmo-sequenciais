// Exercicio 10 - Quatro operações aritméticas

let A = parseInt(prompt("Entre com primeiro valor: "));
let B = parseInt(prompt("Entre com o segundo valor: "));

if (isNaN(A) || isNaN(B)) {
    alert("Entre com valores válidos");
} else {
    let soma = A + B;
    let subtracao = A - B;
    let divisao = A / B;
    let multi = A * B;

    alert(
        `Soma: ${soma}\n` +
        `Subtração: ${subtracao}\n` +
        `Divisão: ${divisao}\n` +
        `Multiplicação: ${multi}`
    );
}
