"use strict";
class ApenasNumImp {
    constructor(lista) {
        this.lista = lista;
    }
    menor() {
        let menor = 100000000;
        for (let i = 0; i < this.lista.length; i++) {
            if (this.lista[i] < menor) {
                menor = this.lista[i];
            }
            ; // Calcula se o número é o menor
        }
        return `O menor número da lista é ${menor}.`;
    }
    maior() {
        let maior = 0;
        for (let i = 0; i < this.lista.length; i++) {
            if (this.lista[i] > maior) {
                maior = this.lista[i];
            }
            ; // Calcula se o número é o maior
        }
        return `O maior número da lista é ${maior}.`;
    }
    media() {
        let media = 0;
        let contador = 0;
        for (let i = 0; i < this.lista.length; i++) {
            if (isFinite(this.lista[i])) { // Identifica se é um número
                contador++;
                media = media += this.lista[i]; // Soma os valores para cálculo da média
            }
        }
        media = (media / contador); // Calcula a média
        return `A média dos número desta lista é ${media.toFixed(2)}.`;
    }
}
let listaImp = new ApenasNumImp([5, 9.8, "Alan", "José", 1000, 0.45, "Brasil"]);
console.log(listaImp.menor());
console.log(listaImp.maior());
console.log(listaImp.media());
