// Exercicio 11 - Calcula o volume de uma esfera

let raio = parseFloat(prompt("Entre com o valor do raio: "));

if (isNaN(raio)) {
    alert("Entre com valor numérico.");
} else if (raio <= 0) {
    alert("Entre com valor maior que zero.")
} else {
    let volume = (4/3) * 3.14159 * Math.pow(raio, 3);
    
    alert(`O valume da esfera é de ${volume.toFixed(2)} unidades cúbicas.`);
}
