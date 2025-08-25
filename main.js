// Exercicio 12 - Sucessor e antecessor 

function anteSucessor(){
    let num = parseInt(prompt("Entre com o valor numérico: "));

    if (isNaN(num) || num <= 0) {
        alert("Entre com valor numérico válido e maior que zero.");
        return;
    }

    let ante = num - 1;
    let suce = num + 1;

    alert(`O antecessor de ${num} é ${ante}\n` +
        `O sucessor de ${num} é ${suce}`
    )
}
anteSucessor();