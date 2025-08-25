// Exercicio 8 - Converção para dolar
/*
let dolar = parseFloat(prompt("Valor em dolar (US$): "));
let cotacao = parseFloat(prompt("Cotação em real (R$): "));

let real = dolar * cotacao;

alert(`O valor em real é R$ ${real.toFixed(2)}`);
*/

// Exercício 9 - Qudrado da soma de 3 valores

let A = parseInt(prompt("Entre com valor de A: "));
let B = parseInt(prompt("Entre com valor de B: "));
let C = parseInt(prompt("Entre com valor de C: "));

if (isNaN(A) || isNaN(B) || isNaN(C)){
    alert("Entre com valores válidos.");
    return;
}

let soma = A + B + C;
let quadrado = soma * soma;

alert(`O quadrado da soma é ${quadrado}`);
