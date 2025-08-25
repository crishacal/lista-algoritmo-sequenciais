// Exercicio 13 - Teste de mesa com pseudocodigo 

/**
Var
a, b, c, soma, dif : real
inicio
a <- 2
b <- 3
c <- 4
dif <- -5
soma <- a+b+c-dif
dif <- soma^2
soma <- raizq (dif)
a <- c
b <- -3
escreva (a, b, c, soma, dif)
fim
 */

let a = 2;
let b = 3;
let c = 4;
let dif = -5;

// Calcula a soma: a + b + c - dif
let soma = a + b + c - dif;

// Calcula o quadrado da soma
dif = soma * soma;

// Calcula a raiz quadrada de dif
soma = Math.sqrt(dif);

// Atribui novos valores
a = c;
b = -3;

// Exibe os valores finais
console.log("a:", a, "b:", b, "c:", c, "soma:", soma, "dif:", dif);