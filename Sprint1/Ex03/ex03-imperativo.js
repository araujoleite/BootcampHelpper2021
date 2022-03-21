"use strict";
const list = [5, 9.8, "Alan", "José", 1000, 0.45, "Brasil"];
function retorna(lista) {
    let maior = 0;
    let menor = 0;
    let media = 0;
    const newLista = [];
    for (let i = 0; i < lista.length; i++) {
        if (isFinite(lista[i])) { // Identifica se é um número
            newLista.push(lista[i]); // Inclui o número na array
            if (lista[i] > maior) {
                maior = lista[i];
            }
            ; // Calcula se o número é o maior
            // if(lista[i] < menor){menor = lista[i]}; // Calcula se o número é o menor
            menor = lista.sort((a, b) => a - b)[0];
            media = media += lista[i]; // Soma os valores para cálculo da média
        }
    }
    media = (media / lista.length); // Calcula a média
    return newLista + ` - O maior número é ${maior},o menor é ${menor} e a média é ${media.toFixed(2)}.`; //Apresenta os valores
}
console.log(retorna(list));
