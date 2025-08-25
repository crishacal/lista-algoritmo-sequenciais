let dolar = parseFloat(prompt("Valor em dolar (US$): "));
let cotacao = parseFloat(prompt("Cotação em real (R$): "));

let real = dolar * cotacao;

alert(`O valor em real é R$ ${real.toFixed(2)}`);