// Exercicio 8 - Converção para dolar
/*
let dolar = parseFloat(prompt("Valor em dolar (US$): "));
let cotacao = parseFloat(prompt("Cotação em real (R$): "));

let real = dolar * cotacao;

alert(`O valor em real é R$ ${real.toFixed(2)}`);
*/

// Exercício 9 - Qudrado da soma de 3 valores

let A = parseInt(prompt("Digite o primeiro valor inteiro (A):"));
let B = parseInt(prompt("Digite o segundo valor inteiro (B):"));
let C = parseInt(prompt("Digite o terceiro valor inteiro (C):"));

// Verifica se as entradas são números inteiros válidos
if (isNaN(A) || isNaN(B) || isNaN(C)) {
    alert("Por favor, insira valores inteiros válidos.");
} else {
    // Calcula a soma e seu quadrado
    let soma = A + B + C;
    let quadradoSoma = soma * soma;
    // Exibe o resultado
    alert("O quadrado da soma de " + A + ", " + B + " e " + C + " é: " + quadradoSoma);
}
