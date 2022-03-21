"use strict";
const lista = [5, 9.8, "Alan", "José", 1000, 0.45, "Brasil"];
function retorno(lista) {
    const newList = lista.filter(isFinite); // Cria nova array apenas com os números
    let menor = Math.min(...newList); // Pega o menor número
    let maior = Math.max(...newList); // Pega o maior número
    let media = (newList.reduce((soma, num) => soma += num, 0) / newList.length).toFixed(2); // Calcula a média
    let resultado = `O maior número da lista é ${maior}, o menor é ${menor} e a média geral é ${media}.`; // Apresentação dos valores
    return resultado;
}
console.log(retorno(lista));
