"use strict";
var _a;
(_a = document.getElementById("enviar")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", contarFunc); //Verifica quando ler o texto
class PalavraFunc {
    constructor(palavra) {
        this.palavra = palavra;
    }
    contaVogal() {
        const vogais = ["a", "e", "i", "o", "u"]; // Define as vogais
        let contador = 0;
        for (let letra of this.palavra.toLowerCase().normalize("NFD")) {
            vogais.includes(letra) ? contador++ : null;
        }
        ;
        let conjuga = contador > 1 ? 'vogais' : 'vogal';
        return `A palavra ${this.palavra} possui ${contador} ${conjuga}.`;
    }
}
function contarFunc() {
    let texto = new PalavraFunc(document.getElementById("texto").value); // Pega valor digitado
    alert(texto.contaVogal());
}
